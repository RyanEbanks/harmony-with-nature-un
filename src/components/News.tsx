import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { getStorage } from 'firebase/storage';
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { ArrowRight, Search } from 'lucide-react';
import NewsCard from './ui/news-card';

interface Post {
    id: string;
    title: string;
    author: string;
    displayText: string;
    contentHeader: string;
    content: string;
    imageURL: string;
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
            const postsData = querySnapshot.docs.map(doc => {
                const data = doc.data() as Omit<Post, 'id'> & {
                    createdAt?: { toDate: () => Date };
                };
                return {
                    id: doc.id,
                    ...data,
                    createdAt: data.createdAt?.toDate().toLocaleDateString() || 'Unknown date',
                };
            });
            setPosts(postsData);
            console.log('posts: ', postsData);
        } catch (err) {
            console.error('Failed to fetch posts.', err);
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

        try {
            await deleteDoc(doc(db, 'posts', postId));
            setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId))
        } catch (error) {
            console.error('Error deleting post:', error);
            setError('Failed to delete post.');
        }
    };

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'>Loading...</div>;
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <div className="flex-1">
                    {/* Page Header */}
                    <div className="bg-stone-50 py-10 md:py-16">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">Latest News</h1>
                                <p className="mt-4 text-lg text-stone-600">
                                    Stay updated with the latest developments in Earth Jurisprudence and Rights of Nature
                                </p>
                            </div>

                            <div className="mx-auto mt-8 flex max-w-md flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <div className="relative flex-1">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-500" />
                                    <Input
                                        type="search"
                                        placeholder="Search articles..."
                                        className="w-full rounded-md border-stone-300 pl-8 shadow-sm"
                                    />
                                </div>
                                <Button variant="outline" className="h-10 rounded-md">
                                    Filter
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='mb-8 flex items-center justify-between'>
                            <h2 className="text-2xl font-bold tracking-tight text-stone-900">Latest News</h2>
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
                                    >
                                        <div
                                            onClick={() => handlePostClick(post.id)}
                                            className='cursor-pointer transform transition duration-200'
                                        >
                                            <NewsCard
                                                title={post.title}
                                                contentHeader={post.contentHeader}
                                                displayText={post.displayText}
                                                imageURL={post.imageURL}
                                                createdAt={post.createdAt}
                                                author={post.author} id={''} content={''}

                                            />
                                            <div className='p-8'>
                                                {isAuthenticated && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent navigation
                                                            handleDelete(post.id);
                                                        }}
                                                        className='absolute bottom-2 right-2 p-2 bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 z-10'
                                                        aria-label='Delete post'
                                                    >
                                                        Delete Post
                                                    </button>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;