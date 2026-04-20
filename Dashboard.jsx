import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import "../App.css";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { signOut } from "firebase/auth";

import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";

export default function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const user = auth.currentUser;

  // 🔥 FETCH WORKOUTS
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "workouts"),
      where("userId", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      setWorkouts(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data()
        }))
      );
    });

    return () => unsub();
  }, [user]);

  // ➕ ADD WORKOUT
  const addWorkout = async (w) => {
    await addDoc(collection(db, "workouts"), {
      ...w,
      userId: user.uid,
      createdAt: Date.now()
    });
  };

  // ❌ DELETE WORKOUT
  const deleteWorkout = async (id) => {
    await deleteDoc(doc(db, "workouts", id));
  };

  // 🔥 STREAK SYSTEM (7-day logic)
  const getStreak = () => {
    if (!workouts.length) return 0;

    const uniqueDays = [
      ...new Set(
        workouts.map((w) =>
          new Date(w.createdAt).toDateString()
        )
      )
    ].sort((a, b) => new Date(b) - new Date(a));

    let streak = 0;
    const today = new Date();

    for (let i = 0; i < uniqueDays.length; i++) {
      const day = new Date(uniqueDays[i]);
      const diff = Math.floor(
        (today - day) / (1000 * 60 * 60 * 24)
      );

      if (diff === streak) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  };

 return (
  <div className="dashboard">

    {/* TOP BAR */}
    <div className="navbar">
      <h2>⚡ IRONTRACK AI</h2>
      <button onClick={() => signOut(auth)}>
        LOGOUT
      </button>
    </div>

    {/* HERO STREAK SECTION */}
    <div className="streak-banner">
      🔥 AI STREAK SYSTEM: {getStreak()} DAYS ACTIVE
    </div>

    {/* GRID LAYOUT */}
    <div className="grid-layout">

      {/* LEFT PANEL - FORM */}
      <div className="card big-card">
        <h3>➕ ADD WORKOUT</h3>

        <WorkoutForm onAdd={addWorkout} />
      </div>

      {/* RIGHT PANEL - STATS */}
      <div className="card small-card">
        <h3>📊 LIVE STATS</h3>
        <p>Total Workouts: {workouts.length}</p>
        <p>Streak: {getStreak()} days</p>
      </div>

    </div>

    {/* WORKOUT FEED */}
    <div className="card">
      <h3>⚡ WORKOUT FEED</h3>

      <WorkoutList
        workouts={workouts}
        onDelete={deleteWorkout}
      />
    </div>

  </div>
);
}