import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


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

interface PostDetailProps {
    url: string | undefined; // Define the type for the url prop
}

const PostDetail: React.FC<PostDetailProps> = ({ url }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchPost = async () => {
        const snapshot = await getDocs(collection(db, 'posts'));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    };

    const deletePost = async (postId: any) => {
        await deleteDoc(doc(db, 'posts', postId));
    };

    const editPost = async (postId: string, newData: Partial<Omit<Post, 'id'>>): Promise<void> => {
        const postRef = doc(db, 'posts', postId);
        await updateDoc(postRef, newData);
    };

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'>Loading...</div>;
    }

    if (!post) {
        return <div className='min-h-screen flex items-center justify-center'>No Posts Currently Available</div>;
    }

    return (
        <div className='flex items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20'>
            <article className='flex items-center flex-col lg:flex-row max-w-[80%] mx-auto bg-white rounded-md shadow-md overflow-hidden'>
                <div className=''>
                    {post?.image && (
                        <img
                            src={post.image}
                            alt={post.title}
                            className='w-full lg:h-96 object-fill'
                        />
                    )}
                </div>
                <div className='p-8'>
                    <div className='mb-8'>
                        <span className='text-sm font-medium text-green-600'>
                            By {post?.author}
                        </span>
                        <time className='mt-2 block text-sm text-gray-500'>
                            {new Date(post?.createdAt || '').toLocaleDateString('en-US', {
                                month: 'short',  // Full month name
                                day: 'numeric', // Numeric day
                                year: 'numeric' // Full year
                            })}
                        </time>
                        <h1 className='mt-2 text-4xl font-bold text-gray-900'>
                            {post?.title}
                        </h1>
                        <p className='mt-4 text-xl text-gray-600'>
                            {post?.displayText}
                        </p>
                    </div>
                    {post?.contentHeader && (
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                            {post.contentHeader}
                        </h2>
                    )}
                    <div className='prose prose-lg max-w-none'>
                        {post?.content}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default PostDetail;

