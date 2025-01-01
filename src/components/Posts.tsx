import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Posts: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [contentHeader, setContentHeader] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        setIsAuthenticated(!!authToken);
    }, []);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                    <svg 
                        className="mx-auto h-12 w-12 text-red-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                        />
                    </svg>
                    <h2 className="mt-4 text-xl font-bold text-gray-900">Access Denied</h2>
                    <p className="mt-2 text-gray-600">
                        You must be signed in to access this page.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/"
                            className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                        >
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('author', author);
            formData.append('displayText', displayText);
            formData.append('contentHeader', contentHeader);
            formData.append('content', content);
            if (image) {
                formData.append('image', image);
            }
    
            console.log('Sending data:', {
                title,
                author,
                displayText,
                contentHeader,
                content,
                image: image?.name
            });
    
            const response = await fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                credentials: 'include',
                body: formData,
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create post');
            }
    
            const data = await response.json();
            console.log('Success:', data);
    
            // Clear form
            setTitle('');
            setAuthor('');
            setDisplayText('');
            setContentHeader('');
            setContent('');
            setImage(null);
            
            // Redirect to news page
            navigate('/news');
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setLoading(false);
        }
    }; 

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 text-center">Create News Post</h1>
                        <p className="mt-2 text-center text-gray-600">Share the latest updates about Rights of Nature</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter post title"
                                required
                            />
                        </div>

                        {/* Author Input */}
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                                Author
                            </label>
                            <input
                                type="text"
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter author name"
                                required
                            />
                        </div>

                        {/* Display Text Input */}
                        <div>
                            <label htmlFor="displayText" className="block text-sm font-medium text-gray-700">
                                Summary
                            </label>
                            <input
                                type="text"
                                id="displayText"
                                value={displayText}
                                onChange={(e) => setDisplayText(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="Write a short summary of the post"
                                required
                            />
                        </div>

                        {/* Content Header Input */}
                        <div>
                            <label htmlFor="contentHeader" className="block text-sm font-medium text-gray-700">
                                Content Header <span className="text-xs text-gray-500">(optional)</span>
                            </label>
                            <input
                                type="text"
                                id="contentHeader"
                                value={contentHeader}
                                onChange={(e) => setContentHeader(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter a short header for the content"
                            />
                        </div>

                        {/* Content Textarea */}
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                Content
                            </label>
                            <textarea
                                id="content"
                                rows={8}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="Write your post content here..."
                                required
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Featured Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                                onChange={(e) => setImage(e.target.files?.[0] || null)}
                                                accept="image/*"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Publish Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Posts;
