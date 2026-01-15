import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Recommended from "../pages/Recommended";
import Reading from "../pages/Reading";
import Library from "../pages/Library";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recommended" element={<Recommended />} />
      <Route path="/library" element={<Library />} />
      <Route path="/reading" element={<Reading />} />
    </Routes>
  );
}
