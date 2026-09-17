export const RESUME_CONTEXT = {
  name: 'Biruk Lemma',
  title: 'Full Stack Software Engineer',
  location: 'Addis Ababa, Ethiopia',
  email: 'biruklemmadebela@gmail.com',
  phone: '+251 944055361',
  resumeUrl: '/BIRUK_LEMMA_FULLSTACK.pdf',
  lastUpdated: 'Sep 17, 2026',
  socials: {
    github: 'https://www.github.com/birukl7/',
    linkedin: 'https://www.linkedin.com/in/biruk-lemma/',
    upwork: 'https://upwork.com/freelancers/~01ded8dd6af250627c',
    instagram: 'https://www.instagram.com/birukl7/',
  },
  bio: 'Biruk Lemma started learning web development back in 2023 using W3Schools and has since built full-stack applications, mobile apps, Telegram bots, and custom CRMs. Backend by profession, full-stack by passion.',
  techStack: [
    'React.js',
    'Next.js',
    'JavaScript (ES6+)',
    'TypeScript',
    'PHP',
    'Laravel',
    'Node.js',
    'Express.js',
    'Python',
    'Java',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AWS',
    'API Integrations',
    'GoHighLevel Integrations',
    'WordPress',
    'Workflow Automation',
    'Database Design',
    'Agile/Scrum',
    'Git / GitHub',
  ],
  projects: [
    {
      name: 'NODD Ticket',
      slug: 'nodd-ticket',
      summary:
        'Enterprise-grade ticket and task management platform developed with Next.js, Supabase, and heavy drag-and-drop workflows for a Sydney-based company to replace ClickUp. Features List/Kanban/Calendar views, Gmail integration, and real-time collaboration.',
    },
    {
      name: 'Excelet Academy',
      slug: 'excelet-academy',
      summary:
        'Digital education platform (https://exceletacademy.com/) serving 1,000+ Ethiopian students with national exam preparation and question banks, built with Laravel, Laravel Sanctum, and Laravel API backend powering the admin suite and student mobile app.',
    },
    {
      name: 'Serdo Store',
      slug: 'serdo',
      summary:
        'Retail e-commerce and inventory stock management platform (https://serdo.et) built with Laravel, Inertia.js, and React.js featuring real-time stock alerts, revenue analytics, and automated tax reporting.',
    },
    {
      name: 'My Habit',
      slug: 'my-habit',
      summary:
        'A habit tracking web platform (https://my-habit.pro.et) integrated with an interactive Telegram bot, featuring calendar tracking, streak analytics, and an XP-based leveling journey.',
    },
    {
      name: 'Placeopia',
      slug: 'placeopia',
      summary:
        'Urban experience and venue discovery platform designed in Figma, featuring a React Native mobile application powered by a scalable Laravel backend API.',
    },
    {
      name: 'Space Invaders',
      slug: 'space-invaders',
      summary:
        'Pure Vanilla JavaScript and HTML5 Canvas retro arcade game (playable at https://birukl7.github.io/space-invaders/) built with custom 2D collision physics, multidimensional array grid structures, and game loop architecture.',
    },
  ],
};

export function getLocalBotResponse(query) {
  const q = query.toLowerCase();

  if (
    q.includes('project') ||
    q.includes('work') ||
    q.includes('portfolio') ||
    q.includes('built')
  ) {
    return `Here are Biruk's key featured projects:

1. **NODD Ticket**: An enterprise task management platform replacing ClickUp for a Sydney-based client (Kanban/List/Calendar views, Gmail integration).
2. **Excelet Academy**: An e-learning & national exam prep app serving 1,000+ Ethiopian students.
3. **Serdo Store**: Retail inventory & stock management platform with automated revenue analytics.
4. **My Habit**: A habit tracking platform with Telegram bot automation, streak calendar tracking, and a level journey (https://my-habit.pro.et).

You can click any project on this page to view interactive case studies and media demos, or click "view more" to explore additional projects like Placeopia and Space Invaders!`;
  }

  if (
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('email') ||
    q.includes('reach') ||
    q.includes('phone')
  ) {
    return `You can get in touch with Biruk directly via:

• **Email**: [biruklemmadebela@gmail.com](mailto:biruklemmadebela@gmail.com)
• **Phone**: [+251 944055361](tel:+251944055361)
• **LinkedIn**: [biruk-lemma](https://www.linkedin.com/in/biruk-lemma/)
• **GitHub**: [@birukl7](https://www.github.com/birukl7/)
• **Upwork**: [Profile](https://upwork.com/freelancers/~01ded8dd6af250627c)`;
  }

  if (
    q.includes('skill') ||
    q.includes('stack') ||
    q.includes('technology') ||
    q.includes('language') ||
    q.includes('tech')
  ) {
    return `Biruk's core tech stack includes:

• **Languages & Backend**: PHP, Laravel, Node.js, Express.js, TypeScript, Python, Java
• **Frontend**: React.js, Next.js, JavaScript (ES6+), TailwindCSS
• **Databases & Cache**: MySQL, PostgreSQL, Redis
• **DevOps & Cloud**: Docker, AWS, Git/GitHub
• **Automation & CMS**: GoHighLevel Integrations, WordPress, Workflow Automation`;
  }

  if (
    q.includes('resume') ||
    q.includes('cv') ||
    q.includes('download') ||
    q.includes('experience')
  ) {
    return `Biruk Lemma is a Full-Stack Developer and GoHighLevel Specialist at Fynz IQ (https://www.fynz.tax/), Lead Full-Stack Developer at Nodd Solutions (https://noddsolutions.com/), and previously Backend Engineer at Pluto Technologies (https://plutotechnologies.org/) and Laravel Mentor at Google Developers Students Club. He holds a Bachelor of Software Engineering from Addis Ababa Science and Technology University (AASTU). You can view or download his official resume here: [Download Resume PDF](/BIRUK_LEMMA_FULLSTACK.pdf).`;
  }

  if (
    q.includes('hi') ||
    q.includes('hello') ||
    q.includes('hey') ||
    q.includes('who are you')
  ) {
    return `Hello! 👋 I'm Biruk Lemma's AI Portfolio Assistant. How can I help you today? You can ask me about Biruk's projects, tech stack, resume, or contact details!`;
  }

  return `Biruk Lemma is a Full Stack Software Engineer proficient in React, Next.js, Node.js, and modern UI engineering. 

Feel free to ask about:
• His **projects** (NODD Ticket, Excelet Academy, Serdo Store, Placeopia, Space Invaders)
• Core **tech stack** and skills
• How to **contact** or **hire** him
• Downloading his **resume**!`;
}
