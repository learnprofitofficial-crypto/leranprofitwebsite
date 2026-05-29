import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "../pages/About.jsx";
import Achievements from "../pages/Achievements.jsx";
import Activities from "../pages/Activities.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import Join from "../pages/Join.jsx";
import Program from "../pages/Program.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
