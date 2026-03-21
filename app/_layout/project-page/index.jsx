'use client';

import { CldImage, CldVideoPlayer } from 'next-cloudinary';

import { Center } from '@/components';
import { randomId } from '@/utils';

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string[]} props.description
 * @param {{ type: 'image' | 'video'; source: string }[]} props.media
 */
export function ProjectPage({ title, description, media }) {
  const mediaItems = media.map(({ type, source }) => {
    const id = randomId();
    const isImage = type === 'image';
    const isVideo = type === 'video';

    return (
      <Center
        key={id}
        className='relative aspect-video w-full overflow-hidden rounded-lg bg-secondary-foreground'
      >
        {isImage && (
          <CldImage
            src={source}
            fill={true}
            className='object-cover'
            alt={title}
          />
        )}
        {isVideo && (
          <CldVideoPlayer
            src={source}
            loop={true}
            controls={true}
            muted={true}
            autoPlay='always'
            width='100%'
            height='100%'
            className='!static !bg-transparent'
          />
        )}
      </Center>
    );
  });

  return (
    <section className='container relative z-10 mt-14'>
      <div className='flex flex-col gap-10'>
        <div className='grid gap-6 md:grid-cols-2'>{mediaItems}</div>

        <div className='max-w-3xl space-y-4'>
          <h1 className='text-4xl font-semibold'>{title}</h1>
          <ul className='pt-10 pb-10 space-y-3'>
            {description.map((point, index) => (
              <li 
                key={index} 
                className='flex items-start gap-3 text-lg text-muted-foreground'
              >
                <span className='mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground' />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
