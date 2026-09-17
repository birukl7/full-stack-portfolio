'use client';

import { useCallback, useEffect, useRef } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { CldImage, CldVideoPlayer } from 'next-cloudinary';

import { Center } from '@/components';
import { randomId } from '@/utils';

const overlayVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
};

const dialogVariants = {
  initial: { opacity: 0, y: 60, scale: 0.97 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose
 * @param {string} [props.title]
 * @param {string[]} [props.description]
 * @param {{ type: 'image' | 'video'; source: string }[]} [props.media]
 * @param {string} [props.link]
 */
export function ProjectDetailDialog({
  isOpen,
  onClose,
  title,
  description = [],
  media = [],
  link,
}) {
  const scrollRef = useRef(null);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      if (window.__lenis) window.__lenis.stop();
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      if (window.__lenis) window.__lenis.start();
    };
  }, [isOpen, handleKeyDown]);

  // Capture wheel events on the scroll container to prevent Lenis from intercepting them
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isOpen) return;

    const handleWheel = e => {
      e.stopPropagation();
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [isOpen]);

  const mediaItems = media.map(({ type, source }) => {
    const id = randomId();
    const isImage = type === 'image';
    const isVideo = type === 'video';

    return (
      <Center
        key={id}
        className='relative aspect-video w-full overflow-hidden rounded-none bg-secondary-foreground'
      >
        {isImage &&
          (source.startsWith('/') ? (
            <Image
              src={source}
              fill={true}
              className='object-cover'
              alt={title || 'Project image'}
            />
          ) : (
            <CldImage
              src={source}
              fill={true}
              className='object-cover'
              alt={title || 'Project image'}
            />
          ))}
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center'
          variants={overlayVariants}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          {/* Backdrop */}
          <div
            className='absolute inset-0 bg-secondary-foreground/80 backdrop-blur-sm'
            onClick={onClose}
          />

          {/* Dialog panel — this is the scroll container */}
          <motion.div
            ref={scrollRef}
            className='relative z-10 mx-4 my-8 max-h-[calc(100vh-4rem)] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-none border border-border bg-background shadow-2xl md:mx-8 md:my-12 md:max-h-[calc(100vh-6rem)]'
            variants={dialogVariants}
            initial='initial'
            animate='enter'
            exit='exit'
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className='sticky top-4 z-20 float-right mr-4 mt-4 flex items-center justify-center rounded-none border border-border bg-secondary p-2 transition-colors hover:bg-muted-foreground hover:text-background'
              aria-label='Close dialog'
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Content */}
            <div className='px-6 pb-10 pt-6 md:px-12 md:pb-14 md:pt-10'>
              <div className='flex flex-col gap-10'>
                <div className='grid gap-6 md:grid-cols-2'>{mediaItems}</div>

                <div className='max-w-3xl space-y-6'>
                  <div className='flex flex-wrap items-center justify-between gap-4'>
                    <h2 className='text-3xl font-semibold leading-tight tracking-tight md:text-4xl'>
                      {title}
                    </h2>
                    {link && (
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn-primary'
                      >
                        {title?.toLowerCase().includes('invaders')
                          ? 'Play Game'
                          : 'Visit Website'}
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                  <div className='space-y-4 pb-4 pt-1 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8'>
                    {description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
