import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sign from "./pages/Sign"; // ✅ Changed from Signin to Sign
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      {" "}
      {/* ✅ BrowserRouter is already a router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} /> {/* ✅ Updated path */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
