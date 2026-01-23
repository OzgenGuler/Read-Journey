import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Recommended from '../pages/Recommended';
import Library from '../pages/Library';
import Reading from '../pages/Reading';
import MainLayout from '../components/Layout/MainLayout';

export default function AppRouter() {
  const token = useSelector(state => state.auth.token);

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <Route element={<MainLayout />}>
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/library" element={<Library />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="*" element={<Navigate to="/recommended" />} />
        </Route>
      )}
    </Routes>
  );
}
