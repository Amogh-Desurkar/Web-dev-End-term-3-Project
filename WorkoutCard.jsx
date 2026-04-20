export default function WorkoutCard({ workout, onDelete }) {
  return (
    <div className="card">
      <h3>{workout.name}</h3>
      <p>🏋️ Sets: {workout.sets}</p>
      <p>🔥 Reps: {workout.reps}</p>

      <button
        style={{ background: "red", color: "white" }}
        onClick={() => onDelete(workout.id)}
      >
        Delete
      </button>
    </div>
  );
}