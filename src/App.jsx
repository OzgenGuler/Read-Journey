import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Recommended from './pages/Recommended';
import Library from './pages/Library';
import Reading from './pages/Reading';
import ProtectedRoute from './router/ProtectedRoute';
import MainLayout from '../components/Layout/MainLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/recommended" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/library" element={<Library />} />
        <Route path="/reading" element={<Reading />} />
      </Route>
    </Routes>
  );
}
