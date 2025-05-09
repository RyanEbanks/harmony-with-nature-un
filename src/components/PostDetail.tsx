// PostDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button } from './ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

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

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // console.log("Params: ", useParams());

  useEffect(() => {
    if (!postId) {
      setError('No post ID provided');
      setLoading(false);
      return;
    }
    fetchPost(postId);
  }, [postId]);

  // Read
  const fetchPost = async (id: string) => {
    try {
      const postRef = doc(db, 'posts', id);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        const data = postSnap.data() as Omit<Post, 'id'> & {
          createdAt?: { toDate: () => Date };
        };

        const postData: Post = {
          id: postSnap.id,
          ...data,
          createdAt: data.createdAt?.toDate().toLocaleDateString() || 'Unknown date',
        };

        setPost(postData);
        console.log('Post:', postData);
      } else {
        setError('Post not found.');
      }
    } catch (err) {
      console.error('Failed to fetch post.', err);
      setError('Failed to fetch post.');
    } finally {
      setLoading(false);
    }
  };


  if (loading) return <div>Loading…</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!post) return null;

  return (
    <div className='w-[80%] mx-auto'>
    {/* Hero Section */}
      <section className="relative">
        <div className="relative h-full w-[800px] mx-auto overflow-hidden">
          <img src={post.imageURL} alt="Ocean underwater scene" className="mx-auto w-[800px] object-cover" />
        </div>
        <div className="container flex flex-col justify-center px-4 pt-12 md:px-6">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mb-6 max-w-md text-lg text-stone-900">
              {post.displayText}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-2 text-sm text-stone-500">
              <time dateTime="2025-05-06">{post.createdAt}</time>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
             {post.contentHeader}
            </h2>
            <div className="prose prose-stone max-w-none">
              {post.content}
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg border border-stone-200 p-6">
              <h3 className="mb-4 text-lg font-medium">Head Back</h3>
              <Button variant="outline" className="mt-4 w-full">
                <a href="/news">View All News</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default PostDetail;
