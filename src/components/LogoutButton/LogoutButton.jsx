import { useDispatch } from 'react-redux';
import { signout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(signout());
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
}
