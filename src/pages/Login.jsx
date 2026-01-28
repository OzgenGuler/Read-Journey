import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authThunks.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup.string().email('Geçerli email gir').required('Email zorunlu'),
  password: yup.string().min(7, 'En az 7 karakter').required('Şifre zorunlu'),
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLoggedIn, error } = useSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/recommended');
  }, [isLoggedIn, navigate]);

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register('email', { required: true })} />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true, minLength: 7 })}
        />
        <p>{errors.password?.message}</p>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
