import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export const tailwindPlugin = plugin(
  //? Add CSS variable definitions to the base layer
  function ({ addBase }) {
    addBase({
      ':root': {
        '--background': '0 0% 100%',
        '--foreground': '220 13% 18%',
        '--card': '0 0% 100%',
        '--card-foreground': '220 13% 18%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '220 13% 18%',
        '--primary': '220 13% 18%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '220 14% 96%',
        '--secondary-foreground': '220 9% 46%',
        '--muted': '220 14% 96%',
        '--muted-foreground': '220 9% 46%',
        '--accent': '220 14% 96%',
        '--accent-foreground': '220 13% 18%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '220 13% 91%',
        '--input': '220 13% 91%',
        '--ring': '220 13% 18%',
        '--radius': '0.75rem',
      },
      '.dark': {
        '--background': '0 0% 0%',
        '--foreground': '0 0% 98%',
        '--card': '0 0% 4%',
        '--card-foreground': '0 0% 98%',
        '--popover': '0 0% 4%',
        '--popover-foreground': '0 0% 98%',
        '--primary': '0 0% 98%',
        '--primary-foreground': '0 0% 0%',
        '--secondary': '0 0% 9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '0 0% 9%',
        '--muted-foreground': '0 0% 64%',
        '--accent': '0 0% 12%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '0 0% 15%',
        '--input': '0 0% 15%',
        '--ring': '0 0% 83%',
      },
    });
  },
  //? Extend the Tailwind theme with 'themable' utilities
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        fontFamily: {
          neue_montreal: ['var(--font-neue-montreal)'],
          inter: ['Inter', 'system-ui', 'sans-serif'],
        },
        transitionDuration: {
          1500: '1500ms',
          2000: '2000ms',
          2500: '2500ms',
          3000: '3000ms',
        },
        transitionTimingFunction: {
          'in-expo': 'cubic-bezier(0.1, 0, 0.3, 1)',
        },
      },
    },
  },
);
