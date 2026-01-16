import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Recommended from '../pages/Recommended';
import Reading from '../pages/Reading';
import Library from '../pages/Library';
import ProtectedRoute from './ProtectedRoute';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/recommended"
        element={
          <ProtectedRoute>
            <Recommended />
          </ProtectedRoute>
        }
      />
      <Route
        path="/library"
        element={
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reading"
        element={
          <ProtectedRoute>
            <Reading />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
