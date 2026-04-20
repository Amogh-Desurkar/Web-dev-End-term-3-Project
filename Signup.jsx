import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    nav("/dashboard");
  };

  return (
  <div className="login-page">
    <div className="login-card">
      <h1 className="Title">Create Account</h1>
      <p className="subtext">Join the IronTrack community</p>

      <input 
        placeholder="Email Address" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button onClick={signup}>SIGN UP</button>

      <p className="footer-text">
        Already have an account? <Link to="/login"><span>Login</span></Link>
      </p>
    </div>
  </div>
);
}