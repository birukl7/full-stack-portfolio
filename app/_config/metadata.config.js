/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://dennis-snellenberg-portfolio.vercel.app/'),
  title: {
    template: '%s |  Biruk Lemma',
    default: 'Biruk Lemma • Software Engineer',
  },
  description:
    'Biruk Lemma is a software engineer with a passion for building web applications that are both functional and aesthetically pleasing.',
  generator: 'Biruk Lemma',
  applicationName: 'Biruk Lemma',
  referrer: 'origin-when-cross-origin',
  keywords: ['Software Engineer', 'Web Developer', 'Freelance'],
  authors: [
    { name: 'Biruk Lemma', url: 'https://www.github.com/birukl7' },
  ],
  creator: 'Biruk Lemma',
  publisher: 'Biruk Lemma',
  twitter: {
    card: 'summary_large_image',
    title: 'Biruk Lemma',
    description:
      'Biruk Lemma is a software engineer with a passion for building web applications that are both functional and aesthetically pleasing.',
    siteId: '1467726470533754880',
    creator: '@birukl7',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://biruk-lemma-portfolio.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
