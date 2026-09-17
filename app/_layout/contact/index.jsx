'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id='contact' className='mt-12 border-t border-border'>
      <div className='section-container flex items-center justify-between py-6'>
        <p className='text-sm text-muted-foreground'>
          © {year}{' '}
          <a
            href='/'
            className='font-medium text-foreground transition-colors hover:text-foreground/80'
          >
            biruk.pro.et
          </a>{' '}
          |{' '}
          <a href='#' className='transition-colors hover:text-foreground'>
            privacy
          </a>
        </p>

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
    </footer>
  );
}
