import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../index.css';

function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
            <img src='/images/notfoundpage.png' alt='earth mascot' className='w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]' />
            <h1 className='text-4xl font-bold text-center'>404 - Page Not Found</h1>
            <p className='text-lg mt-2 text-center'>Oops! The page you're looking for doesn't exist.</p>
            <Link to='/' className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700'>
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;
