import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import "./App.css";

function Protected({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function Public({ children }) {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" /> : children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={<Public><Login /></Public>}
        />

        <Route
          path="/signup"
          element={<Public><Signup /></Public>}
        />

        <Route
          path="/dashboard"
          element={<Protected><Dashboard /></Protected>}
        />
      </Routes>
    </BrowserRouter>
  );
}