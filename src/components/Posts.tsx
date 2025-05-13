import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from '../firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import NotFound from './NotFound';

interface PostsProps {
    url: string | undefined;
}

const Posts: React.FC<PostsProps> = ({ url }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [contentHeader, setContentHeader] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem('authToken'));

    useEffect(() => {
        const checkLogIn = () => {
            setLoggedIn(!!localStorage.getItem('authToken'));
        };

        checkLogIn();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;
            if (!user) throw new Error("Unauthorized");

            const storage = getStorage();
            let imageURL = '';

            if (image) {
                const imageRef = ref(storage, `upload/${image.name}`);
                await uploadBytes(imageRef, image);
                imageURL = await getDownloadURL(imageRef);
            }

            const userId = user.uid;

            await addDoc(collection(db, 'posts'), {
                title,
                author,
                displayText,
                contentHeader,
                content,
                imageURL,
                createdAt: serverTimestamp(),
                userId
            });

            console.log('Post Added!');
            navigate('/news');
        } catch (error) {
            console.error('Error adding post: ', error);
        }
    };

    return (
        <div className="post-parent-container">
            {isLoggedIn ? (
                <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='max-w-3xl mx-auto'>
                        <div className='bg-white shadow-lg rounded-lg p-8'>
                            <div className='mb-8'>
                                <h1 className='text-3xl font-bold text-gray-900 text-center'>Create News Post</h1>
                                <p className='mt-2 text-center text-gray-600'>Share the latest updates about Rights of Nature</p>
                            </div>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor='title' className='block text-sm font-medium text-gray-700'>Title</label>
                                    <input
                                        type='text'
                                        id='title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500'
                                        placeholder='Enter post title'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='author' className='block text-sm font-medium text-gray-700'>Author</label>
                                    <input
                                        type='text'
                                        id='author'
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500'
                                        placeholder='Enter author name'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='displayText' className='block text-sm font-medium text-gray-700'>Summary</label>
                                    <input
                                        type='text'
                                        id='displayText'
                                        value={displayText}
                                        onChange={(e) => setDisplayText(e.target.value)}
                                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500'
                                        placeholder='Write a short summary of the post'
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor='contentHeader' className='block text-sm font-medium text-gray-700'>
                                        Content Header <span className='text-xs text-gray-500'>(optional)</span>
                                    </label>
                                    <input
                                        type='text'
                                        id='contentHeader'
                                        value={contentHeader}
                                        onChange={(e) => setContentHeader(e.target.value)}
                                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500'
                                        placeholder='Enter a short header for the content'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='content' className='block text-sm font-medium text-gray-700'>Content</label>
                                    <textarea
                                        id='content'
                                        rows={8}
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500'
                                        placeholder='Write your post content here...'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700'>Featured Image</label>
                                    <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                                        <div className='space-y-1 text-center'>
                                            <svg className='mx-auto h-12 w-12 text-gray-400' stroke='currentColor' fill='none' viewBox='0 0 48 48' aria-hidden='true'>
                                                <path d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                            <div className='flex text-sm text-gray-600'>
                                                <label htmlFor='file-upload' className='relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500'>
                                                    <span>Upload a file</span>
                                                    <input
                                                        id='file-upload'
                                                        name='file-upload'
                                                        type='file'
                                                        accept='image/*'
                                                        className='sr-only'
                                                        onChange={(e) => {
                                                            if (e.target.files && e.target.files[0]) {
                                                                setImage(e.target.files[0]);
                                                            }
                                                        }}
                                                    />
                                                </label>
                                                <p className='pl-1'>or drag and drop</p>
                                            </div>
                                            <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
                                            {image && (
                                                <p className='text-xs text-gray-500 mt-2'>{image.name}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-end'>
                                    <button
                                        type='submit'
                                        className='px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                                    >
                                        Publish Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div><NotFound /></div>
            )}
        </div>
    );
};

export default Posts;
