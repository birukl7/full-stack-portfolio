'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

import { RESUME_CONTEXT } from '@/data';

export function Contact() {
  const year = new Date().getFullYear();
  const lastUpdated = RESUME_CONTEXT.lastUpdated || 'Sep 17, 2026';

  return (
    <footer id='contact' className='mt-12 border-t border-border'>
      <div className='section-container py-6'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-col gap-1 text-sm text-muted-foreground'>
            <p>
              © {year}{' '}
              <a
                href='/'
                className='font-medium text-foreground transition-colors hover:text-foreground/80'
              >
                biruk.pro.et
              </a>
            </p>
            <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
              <span className='inline-block size-1.5 rounded-none bg-emerald-500' />
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className='flex items-center gap-1'>
            <a
              href='https://www.linkedin.com/in/biruk-lemma/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              aria-label='LinkedIn'
            >
              <Linkedin size={16} />
            </a>
            <a
              href='https://www.github.com/birukl7/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              aria-label='GitHub'
            >
              <Github size={16} />
            </a>
            <a
              href='mailto:biruklemmadebela@gmail.com'
              className='social-icon'
              aria-label='Email'
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
