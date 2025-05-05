import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

interface Post {
    id: string;
    title: string;
    displayText: string;
    author: string;
    category: string;
    image: string;
    createdAt: string;
}

interface NewsProps {
    url: string | undefined; // Define the type for the url prop
}

const News: React.FC<NewsProps> = ({ url }) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem('authToken'));
        fetchPosts();
    }, []);

    // Read
    const fetchPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<Post, 'id'>)
            }));
            setPosts(postsData)
            console.log('posts: ', posts);
        } catch (err) {
            console.error('Failed to fetch posts.', err)
            setError('Failed to fetch posts.');
        } finally {
            setLoading(false);
        }
    };


    const handlePostClick = (postId: string) => {
        navigate(`/news/${postId}`);
    };

    const handleDelete = async (postId: string) => {
        if (!window.confirm('Are you sure you want to delete this post?')) return;

        await deleteDoc(doc(db, 'posts', postId));
    };

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'>Loading...</div>;
    }

    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl md:text-6xl font-light mb-20'>
                    <span className='border-l-8 border-[#40916C] pl-6'>Latest News</span>
                </h1>
                {error ? (
                    <div className='text-center text-red-600'>{error}</div>
                ) : posts.length === 0 ? (
                    <div className='text-center text-gray-600'>No posts available</div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className='bg-white rounded-lg shadow-lg overflow-hidden relative'
                            >
                                {isAuthenticated && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent navigation
                                            handleDelete(post.id);
                                        }}
                                        className='absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 z-10'
                                        aria-label='Delete post'
                                    >
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                        </svg>
                                    </button>
                                )}
                                <div
                                    onClick={() => handlePostClick(post.id)}
                                    className='cursor-pointer transform transition duration-200 hover:scale-102'
                                >
                                    {post.image && (
                                        <div className='w-full h-48 relative'>
                                            <img
                                                src={post.image.startsWith('http') ? post.image : `${url}${post.image}`}
                                                alt={post.title}
                                                className='w-full h-full object-fill'
                                                onError={(e) => {
                                                    console.error('Image failed to load:', post.image);
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    <div className='p-6'>
                                        <span className='text-sm font-medium text-green-600'>
                                            {post.category}
                                        </span>
                                        <h2 className='mt-2 text-xl font-semibold text-gray-900'>
                                            {post.title}
                                        </h2>
                                        <p className='mt-3 text-gray-600 line-clamp-3'>
                                            {post.displayText}
                                        </p>
                                        <div className='mt-4 text-sm text-gray-500 flex flex-row'>
                                            <div className='mr-2'>
                                                {post.createdAt}
                                            </div>
                                            <div>
                                                By {post.author}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;