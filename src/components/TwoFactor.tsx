import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TwoFactorProps {
    url: string | undefined; // Define the type for the url prop
  }
    const TwoFactor: React.FC<TwoFactorProps> = ({url}) => {
      const [code, setCode] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();
  
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        try {
            const email = localStorage.getItem('tempEmail');
            
            const response = await fetch(`${url}/api/login/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ 
                    email: email,
                    code: code 
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Verification failed');
            }

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('username', data.username);
            }
            navigate('/upload');
            window.location.reload();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to connect to verification service');
            console.error('Verification error:', err);
        }
    };
      
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <div className='max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md'>
                <div>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                        Two-Factor Authentication
                    </h2>
                    <p className='mt-2 text-center text-sm text-gray-600'>
                        Please enter the verification code
                    </p>
                </div>
                <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                    {error && (
                        <div className='text-red-600 text-sm text-center'>
                            {error}
                        </div>
                    )}
                    <div>
                        <input
                            type='text'
                            required
                            className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
                            placeholder='Enter verification code'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                        >
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TwoFactor;
