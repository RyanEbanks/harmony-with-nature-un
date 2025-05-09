import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  author: string;
  displayText: string;
  contentHeader: string;
  content: string;
  imageURL: string;
  createdAt: string;
}

export default function NewsCard({
  id,
  title,
  author,
  displayText,
  contentHeader,
  content,
  imageURL,
  createdAt,
}: NewsCardProps) {
  return (
    <Card className='flex h-[420px] flex-col overflow-hidden border-0 shadow-sm transition-all hover:shadow-md'>
      {/* Image */}
      <div className='aspect-video w-full overflow-hidden'>
        <img
          src={imageURL || '/placeholder.svg'}
          alt={title}
          className='h-full w-full object-cover'
        />
      </div>

      {/* Content */}
      <CardHeader className='p-4 pb-2'>
        <CardTitle className='line-clamp-2 text-lg'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='p-4 pt-0 flex-1'>
        <h4 className='text-md font-semibold mb-1 line-clamp-2'>{contentHeader}</h4>
        <p className='text-sm text-stone-700 mb-2 line-clamp-2'>{displayText}</p>
      </CardContent>

      {/* Footer */}
      <CardFooter className='flex items-center justify-between border-t p-4 text-xs text-stone-500'>
        <div className='flex items-center gap-2'>
          <Calendar className='h-3.5 w-3.5' />
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        <div className='flex items-center gap-2'>
          <User className='h-3.5 w-3.5' />
          <span>{author}</span>
        </div>
      </CardFooter>
    </Card>

  );
}
