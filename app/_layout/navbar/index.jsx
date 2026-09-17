'use client';

import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <div className='section-container flex items-center justify-end pb-2 pt-6'>
      <ThemeToggle />
    </div>
  );
}

export const TopBar = Navbar;
export { ThemeToggle } from './theme-toggle';
