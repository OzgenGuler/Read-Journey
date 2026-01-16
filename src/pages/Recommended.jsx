import { useSelector } from 'react-redux';

export default function Recommended() {
  const { isLoggedIn, user } = useSelector(state => state.auth);

  return (
    <div>
      <h2>Recommended Page</h2>
      {isLoggedIn ? (
        <p>Welcome back, {user.name}!</p>
      ) : (
        <p>Please log in to see recommendations.</p>
      )}
    </div>
  );
}
