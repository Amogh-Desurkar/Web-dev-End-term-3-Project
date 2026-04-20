import { useState } from "react";

export default function WorkoutForm({ onAdd }) {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !sets || !reps) return;

    onAdd({ name, sets, reps });

    setName("");
    setSets("");
    setReps("");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Workout name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Sets" value={sets} onChange={(e) => setSets(e.target.value)} />
      <input placeholder="Reps" value={reps} onChange={(e) => setReps(e.target.value)} />

      <button style={{ background: "#00ff88" }}>
        Add Workout
      </button>
    </form>
  );
}