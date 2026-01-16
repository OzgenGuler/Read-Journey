import instance from './axios';

export const loginUser = data => instance.post('/auth/login', data);
export const registerUser = data => instance.post('/auth/register', data);
