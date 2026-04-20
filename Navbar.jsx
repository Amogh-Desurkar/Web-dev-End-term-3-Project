import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  return (
    <div>
      <h2>🏋️ IronTrack</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}