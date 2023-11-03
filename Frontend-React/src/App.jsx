import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import "./App.css";
import Dashboard from "./User/Pages/Dashboard";
// import { AdminDashboard } from "./Admin/Pages/AdminDashboard";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import NotFound from "./Auth/NotFound";
import { useEffect } from "react";
import AdminDashboard from "./Admin/Pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
