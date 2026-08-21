'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Amoeba shape image on the left side */}
      <div className='absolute left-8 top-1/2 z-0 -translate-y-1/2 max-md:left-1/2 max-md:top-1/3 max-md:-translate-x-1/2 md:left-16 lg:left-24'>
        <div className='animate-amoeba relative size-72 overflow-hidden border-2 border-background/20 shadow-2xl transition-all duration-700 md:size-[420px] lg:size-[480px]'>
          <CldImage
            src='biruk_lemma_qjnvf8'
            className='scale-105 object-cover object-top'
            fill={true}
            sizes='(max-width: 768px) 288px, (max-width: 1024px) 420px, 480px'
            alt='Biruk Lemma Personal Picture'
            priority
          />
        </div>
      </div>

      <div className='relative z-10 flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(7em,12vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Biruk Lemma
                <span className='spacer'>-</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Software Engineer</span>
              <span className='block'>Designer &amp; Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
