import { Navigate, Route, Routes } from "react-router-dom";
import Achievements from "../pages/Achievements.jsx";
import Activities from "../pages/Activities.jsx";
import Home from "../pages/Home.jsx";
import Join from "../pages/Join.jsx";
import Program from "../pages/Program.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Program" element={<Program />} />
      <Route path="/program" element={<Program />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/Achievements" element={<Achievements />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/Join" element={<Join />} />
      <Route path="/join" element={<Join />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
