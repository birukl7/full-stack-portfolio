'use client';

import { Contact, Navbar, ProjectPage, Transition } from '@/layout';
import { projectPages } from '@/data';

/**
 * @param {{ params: { project: string } }} context
 */
export default function ProjectRoute({ params }) {
  const slug = params.project;
  const project = projectPages[slug];

  if (!project) {
    return null;
  }

  return (
    <Transition>
      <Navbar />
      <main>
        <ProjectPage
          title={project.title}
          description={project.description}
          media={project.media}
        />
      </main>
      <Contact />
    </Transition>
  );
}

