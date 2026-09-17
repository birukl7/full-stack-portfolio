'use client';

import { useState } from 'react';

import { Check, Copy, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

function TelegramIcon({ className = 'size-3.5' }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      aria-hidden='true'
    >
      <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
    </svg>
  );
}

function XIcon({ className = 'size-3.5' }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      aria-hidden='true'
    >
      <path d='M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.345-6.993L3.64 22H1l6.99-7.99L2 2h6.828l4.83 6.357L18.244 2zm-2.396 18h1.885L7.902 4H5.87l9.978 16z' />
    </svg>
  );
}

const CONTACT_ITEMS = [
  {
    name: 'Twitter',
    href: 'https://x.com/biruk_777',
    copyText: '@biruk_777',
    icon: XIcon,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/birukl7',
    copyText: '@birukl7',
    icon: TelegramIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/biruk-lemma/',
    copyText: 'https://www.linkedin.com/in/biruk-lemma/',
    icon: Linkedin,
  },
];

export function Header() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, name, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedItem(name);
      setTimeout(() => {
        setCopiedItem(current => (current === name ? null : current));
      }, 2000);
    }
  };

  return (
    <header className='section-container pb-12 pt-10'>
      <div className='animate-fade-in-up max-w-3xl'>
        {/* Profile Pic + Heading & Social Links */}
        <div className='mb-6 flex items-end gap-4 sm:gap-5'>
          <div className='relative size-20 shrink-0 overflow-hidden rounded-none border border-border bg-muted/30 shadow-sm sm:size-24 md:size-28'>
            <CldImage
              src='biruk_lemma_qjnvf8'
              className='object-cover object-top'
              fill={true}
              sizes='(max-width: 768px) 96px, 112px'
              alt='Biruk Lemma'
              priority
            />
          </div>
          <div>
            <h1 className='mb-2 text-3xl tracking-tight md:text-4xl'>Biruk</h1>

            {/* Twitter, Telegram, LinkedIn with rectangular icon box and middle-aligned text */}
            <div className='flex flex-wrap items-center gap-x-3.5 gap-y-2'>
              {CONTACT_ITEMS.map(item => {
                const Icon = item.icon;
                const isCopied = copiedItem === item.name;

                return (
                  <div
                    key={item.name}
                    className='group relative inline-flex items-center gap-1'
                  >
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className='inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-[13px]'
                    >
                      <span className='flex size-[22px] shrink-0 items-center justify-center rounded-none border border-border bg-muted/30 transition-colors group-hover:border-foreground/40 group-hover:bg-muted/60 sm:size-6'>
                        <Icon className='size-3 sm:size-3.5' />
                      </span>
                      <span>{item.name}</span>
                    </a>

                    <button
                      type='button'
                      onClick={e => handleCopy(item.copyText, item.name, e)}
                      className={`inline-flex items-center justify-center rounded-none p-0.5 text-muted-foreground transition-opacity hover:text-foreground ${
                        isCopied
                          ? 'opacity-100'
                          : 'opacity-60 md:opacity-0 md:group-hover:opacity-100'
                      }`}
                      title={`Copy ${item.copyText}`}
                      aria-label={`Copy ${item.name}`}
                    >
                      {isCopied ? (
                        <Check size={12} className='text-emerald-500' />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>

                    {isCopied && (
                      <span className='pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-none bg-foreground px-1.5 py-0.5 text-[10px] font-medium text-background shadow-md duration-150 animate-in fade-in zoom-in-95'>
                        Copied!
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className='mb-2 text-lg leading-relaxed text-muted-foreground'>
          I started learning web development back in 2022 using{' '}
          <a
            href='https://www.w3schools.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground/80'
          >
            W3Schools
          </a>
          .
        </p>

        <p className='mb-6 text-lg leading-relaxed text-muted-foreground'>
          Now, I&apos;ve dipped my toes into{' '}
          <span className='font-medium text-foreground'>
            full-stack development
          </span>
          , <span className='font-medium text-foreground'>mobile apps</span>,{' '}
          <span className='font-medium text-foreground'>Telegram bots</span>,
          and <span className='font-medium text-foreground'>CRMs</span>.
        </p>

        {/* <p className='mb-5  text-muted-foreground'>
          <span className='font-medium text-foreground'>Open to freelance work</span>{' '}
          — feel free to reach out!
        </p> */}

        {/* Resume + GitHub & Email icons */}
        <div className='flex items-center gap-3'>
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
    </header>
  );
}
