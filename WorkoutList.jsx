import WorkoutCard from "./WorkoutCard";

export default function WorkoutList({ workouts, onDelete }) {
  return (
    <div>
      {workouts.map((w) => (
        <WorkoutCard key={w.id} workout={w} onDelete={onDelete} />
      ))}
    </div>
  );
}