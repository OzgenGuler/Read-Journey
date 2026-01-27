import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authThunks';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>📚 Read Journey</div>

      <nav style={styles.nav}>
        <NavLink to="/recommended" style={navStyle}>
          Recommended
        </NavLink>
        <NavLink to="/library" style={navStyle}>
          My Library
        </NavLink>
      </nav>

      <div style={styles.user}>
        <span>{user?.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    background: '#1c1c1c',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  user: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
};

const navStyle = ({ isActive }) => ({
  color: isActive ? '#4caf50' : 'white',
  textDecoration: 'none',
});
