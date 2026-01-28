import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerThunk } from '../features/auth/authThunks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../api/axios';

const schema = yup.object({
  name: yup.string().required('İsim zorunlu'),
  email: yup.string().email('Geçerli email gir').required('Email zorunlu'),
  password: yup.string().min(7, 'En az 7 karakter').required('Şifre zorunlu'),
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, isLoading, error } = useSelector(state => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(registerThunk(data));
  };

  useEffect(() => {
    if (token) navigate('/recommended');
  }, [token, navigate]);

  // dispatch(() => {
  //   registerUser({
  //     name: data.name,
  //     email: data.email,
  //     password: data.password,
  //   })
  //     .then(() => {
  //       navigate('/login');
  //     })
  //     .catch(err => {
  //       console.error('Registration error:', err);
  //     });
  // });

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register('name')} />
        <p>{errors.name?.message}</p>

        <input placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
