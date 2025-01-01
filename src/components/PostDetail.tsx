import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
    id: number;
    title: string;
    author: string;
    displayText: string;
    contentHeader: string;
    content: string;
    image: string;
    createdAt: string;
}

const PostDetail: React.FC = () => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                console.log('Fetching post with ID:', id);
                
                // Fix the URL construction
                const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                });
    
                console.log('Response status:', response.status);
    
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Post not found');
                    }
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch post');
                }
    
                const data = await response.json();
                console.log('Fetched post data:', data);
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };
    
        if (id) {
            fetchPost();
        }
    }, [id]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!post) {
        return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {post?.image && (
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-96 object-cover"
                    />
                )}
                <div className="p-8">
                    <div className="mb-8">
                        <span className="text-sm font-medium text-green-600">
                            By {post?.author}
                        </span>
                        <time className="mt-2 block text-sm text-gray-500">
                            {new Date(post?.createdAt || '').toLocaleDateString()}
                        </time>
                        <h1 className="mt-2 text-4xl font-bold text-gray-900">
                            {post?.title}
                        </h1>
                        <p className="mt-4 text-xl text-gray-600">
                            {post?.displayText}
                        </p>
                    </div>
                    {post?.contentHeader && (
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            {post.contentHeader}
                        </h2>
                    )}
                    <div className="prose prose-lg max-w-none">
                        {post?.content}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default PostDetail; 

