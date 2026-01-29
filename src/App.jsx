// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './redux/auth/authOperations';

// Routes
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

// Pages
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecommendedPage from './pages/RecommendedPage/RecommendedPage';
import MyLibraryPage from './pages/MyLibraryPage/MyLibraryPage';
import ReadingPage from './pages/ReadingPage/ReadingPage';

// Layout
import Header from './components/Layout/Header/Header';

function App() {
  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    if (token && !isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, token, isLoggedIn]);

  return (
    <div className="app">
      <Routes>
        {/* Public Routes
        <Route
          path="/"
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        /> */}
        <Route
          path="/"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/recommended"
          element={
            <PrivateRoute>
              <Header />
              <RecommendedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/library"
          element={
            <PrivateRoute>
              <Header />
              <MyLibraryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reading/:bookId"
          element={
            <PrivateRoute>
              <Header />
              <ReadingPage />
            </PrivateRoute>
          }
        />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
