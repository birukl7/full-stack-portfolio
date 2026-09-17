'use client';

import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

import { navItems } from '@/data';

import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg'>
      <div className='section-container flex items-center justify-between py-3'>
        {/* Nav links */}
        <ul className='flex items-center gap-1'>
          {navItems.map(({ href, title }) => (
            <li key={title}>
              <Link
                href={href}
                className='rounded-none px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className='flex items-center gap-1'>
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
