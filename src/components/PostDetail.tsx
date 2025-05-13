// PostDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button } from './ui/button';
import { ArrowRight, Calendar, Search, SquarePen, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  // console.log("Params: ", useParams());

  const [editPostData, setEditPostData] = useState<Omit<Post, 'id' | 'createdAt'>>({
    title: '',
    author: '',
    displayText: '',
    contentHeader: '',
    content: '',
    imageURL: '',
  });

  useEffect(() => {
    if (!postId) {
      setError('No post ID provided');
      setLoading(false);
      return;
    }
    setIsAuthenticated(!!localStorage.getItem('authToken'));
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

        // Setting post into state to better handle it later
        setEditPostData({
          title: data.title,
          author: data.author,
          displayText: data.displayText,
          contentHeader: data.contentHeader,
          content: data.content,
          imageURL: data.imageURL,
        });


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
    <>
      <div className="min-h-screen">
        <div>
          <div className='bg-stone-50'>
            {isAuthenticated && (
              <div className='flex pt-4 justify-end mr-10'>
                <Button variant="outline" className="mt-4 bg-teal-100 hover:bg-teal-200" onClick={() => setIsEditable(prev => !prev)}>
                  <p className='text-teal-800'>Edit</p>
                  <SquarePen className='text-teal-800' />
                </Button>
              </div>
            )}
            {/* Featured Article */}
            <section className="container px-4 py-12 md:py-16 lg:py-20 w-[80%] mx-auto">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                <div className="order-2 flex flex-col justify-center md:order-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800">
                      Harmony With Nature
                    </span>
                  </div>
                  <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
                    {isEditable ? (
                      <input value={editPostData.title} onChange={(e) => setEditPostData({ ...editPostData, title: e.target.value })} className='border-2 border-teal-800 rounded-md' />
                    ):( 
                      post.title
                     )}
                  </h1>
                  <div>
                    <p className="mb-6 text-lg leading-relaxed text-stone-700">
                       {isEditable ? (
                      <textarea value={editPostData.displayText} onChange={(e) => setEditPostData({ ...editPostData, displayText: e.target.value })} className='border-2 border-teal-800 rounded-md w-full' />
                    ):( 
                      post.displayText
                     )}
                    </p>
                  </div>
                  <div className="mb-6 flex items-center gap-4 text-sm text-stone-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2025-05-06">{post.createdAt}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      <span>
                         {isEditable ? (
                      <input value={editPostData.author} onChange={(e) => setEditPostData({ ...editPostData, author: e.target.value })} className='border-2 border-teal-800 rounded-md' />
                    ):( 
                      post.author
                     )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={post.imageURL}
                      alt="Underwater diver with camera equipment"
                      className="object-fill"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Article Content */}
          <div className="bg-white py-12 md:py-16 flex flex-col items-center">
            <div className="container px-4 w-[90%]">
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                   {isEditable ? (
                      <textarea value={editPostData.contentHeader} onChange={(e) => setEditPostData({ ...editPostData, contentHeader: e.target.value })} className='border-2 border-teal-800 rounded-md w-full' />
                    ):( 
                      post.contentHeader
                     )}
                </h2>
                <div className="prose prose-stone mx-auto max-w-none">
                  <p>
                     {isEditable ? (
                      <textarea value={editPostData.content} onChange={(e) => setEditPostData({ ...editPostData, content: e.target.value })} className='flex border-2 border-teal-800 rounded-md w-full h-[200px]' />
                    ):( 
                      post.content
                     )}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8 w-full lg:w-1/2 mt-8">
              <div className="p-6 w-3/4 mx-auto">
                <Button variant="outline" className="mt-4 w-full hover:bg-stone-50">
                  <a href="/news">View All News</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
