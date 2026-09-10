'use client';

import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

export function Header() {
  return (
    <header className='section-container pb-12 pt-10'>
      <div className='flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between'>
        {/* Left — Text */}
        <div className='animate-fade-in-up flex-1'>
          <h1 className='mb-3 text-3xl font-bold tracking-tight md:text-4xl'>
            hi biruk here. <span className='inline-block'>👋</span>
          </h1>

          <p className='mb-1 text-base '>
            Full Stack Software Engineer from Addis Ababa 🇪🇹
          </p>

          <p className='mb-2 leading-relaxed text-muted-foreground'>
            Backend by profession, full-stack by{' '}
            <span className='font-medium text-foreground'>passion</span>.
            <br></br>I build and ship{' '}
            <span className='font-medium text-foreground'>
              web & mobile apps
            </span>
            .
          </p>

          {/* <p className='mb-5  text-muted-foreground'>
            <span className='font-medium text-foreground'>Open to freelance work</span>{' '}
            — feel free to reach out!
          </p> */}

          {/* Resume + Social icons */}
          <div className='flex flex-wrap items-center gap-3'>
            <a
              href='/BIRUK_LEMMA_FULLSTACK.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary'
            >
              Resume
              <FileText size={15} />
            </a>

            <a
              href='https://www.linkedin.com/in/biruk-lemma/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              aria-label='LinkedIn'
            >
              <Linkedin size={18} />
            </a>

            <a
              href='https://www.github.com/birukl7/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              aria-label='GitHub'
            >
              <Github size={18} />
            </a>

            <a
              href='mailto:biruklemmadebela@gmail.com'
              className='social-icon'
              aria-label='Email'
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div className='animate-fade-in-up animation-delay-200'>
          <div className='relative size-28 overflow-hidden rounded-none border border-border bg-muted/30 shadow-sm md:size-32'>
            <CldImage
              src='biruk_lemma_qjnvf8'
              className='object-cover object-top'
              fill={true}
              sizes='(max-width: 768px) 112px, 128px'
              alt='Biruk Lemma'
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
