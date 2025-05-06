// PostDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

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

const PostDetail: React.FC<{ url?: string }> = ({ url }) => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!postId) {
      setError('No post ID provided');
      setLoading(false);
      return;
    }
    fetchPost(postId);
  }, [postId]);

  const fetchPost = async (id: string) => {
    try {
      const docRef = doc(db, 'posts', id);
      const snap = await getDoc(docRef);
      if (!snap.exists()) {
        setError('Post not found');
      } else {
        const data = snap.data() as any;
        setPost({
          id: snap.id,
          title: data.title,
          author: data.author,
          displayText: data.displayText,
          contentHeader: data.contentHeader,
          content: data.content,
          imageURL: data.imageURL,
          createdAt: data.createdAt
            ? data.createdAt.toDate().toLocaleDateString()
            : 'Unknown date',
        });
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading…</div>;
  if (error)   return <div className="text-red-600">{error}</div>;
  if (!post)   return null;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.imageURL && (
        <img
          src={post.imageURL}
          alt={post.title}
          className="w-full max-h-96 object-cover mb-6"
        />
      )}
      <p className="text-sm text-gray-500 mb-2">
        {post.createdAt} — by {post.author}
      </p>
      {post.contentHeader && (
        <h2 className="text-2xl font-semibold mb-4">{post.contentHeader}</h2>
      )}
      <div className="prose">
        {post.content}
      </div>
    </div>
  );
};

export default PostDetail;
