'use client';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/providers';

export function ThemeToggle() {
  const { mounted, setTheme, theme } = useTheme();

  if (!mounted) {
    return (
      <button
        type='button'
        className='social-icon'
        aria-label='Toggle theme'
        disabled
      >
        <span className='size-[18px]' />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='social-icon transition-transform duration-200 hover:scale-105 active:scale-95'
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={18} className='text-amber-400 transition-all' />
      ) : (
        <Moon size={18} className='text-foreground transition-all' />
      )}
    </button>
  );
}
