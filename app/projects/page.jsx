import { Contact, Navbar } from '@/layout';

import { ProjectsClient } from './projects-client';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Projects | Biruk Lemma',
  description:
    'Explore all full-stack applications, mobile apps, and pure JavaScript games built by Biruk Lemma.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsClient />
      </main>
      <Contact />
    </>
  );
}
