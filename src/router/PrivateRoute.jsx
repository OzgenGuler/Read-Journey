const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  return isAuth ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
