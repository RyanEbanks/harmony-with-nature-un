import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { isAllowedUser } from '../auth/authService';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email;

      if (!isAllowedUser(userEmail)) {
        setErrMessage('Access Denied: You are not allowed to sign in.');
        return;
      }

      localStorage.setItem('authToken', 'true'); // Setting for local storage 
      localStorage.setItem('userEmail', userEmail || '');

      navigate('/upload'); // Redirect on successful login
    } catch (error: any) {
      setErrMessage(error.message || 'Sign in failed.');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl h-[80vh] flex flex-col justify-center'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900'>Sign In</h2>
          <p className='mt-2 text-sm text-gray-600'>Welcome back!</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <div className='mt-1'>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleInputChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#40916c] focus:border-[#40916c] text-gray-900'
                placeholder='Enter your email'
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <div className='mt-1'>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#40916c] focus:border-[#40916c] text-gray-900'
                placeholder='Enter your password'
              />
            </div>
            {errMessage && (
              <p className='mt-2 text-sm text-red-600'>{errMessage}</p>
            )}
          </div>

          <div className='flex items-center justify-end'>
            <button
              type='submit'
              className='px-6 py-3 text-sm font-semibold text-white bg-[#40916c] rounded-md hover:bg-[#2d6a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40916c] transition-colors duration-200'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
