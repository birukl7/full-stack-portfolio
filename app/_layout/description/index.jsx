'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className='max-lg:relative max-lg:right-auto max-lg:top-auto max-lg:mt-4 max-lg:flex max-lg:justify-end lg:absolute lg:right-0 lg:top-full lg:me-10'>
            <a
              href='/BIRUK_LEMMA_FULLSTACK.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MagneticButton variant='ghost' size='xl'>
                Resume
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
