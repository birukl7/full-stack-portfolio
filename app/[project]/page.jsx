'use client';

import { useRouter } from 'next/navigation';

import { projectPages } from '@/data';
import { Contact, Navbar, ProjectPage, Transition } from '@/layout';

/**
 * @param {{ params: { project: string } }} context
 */
export default function ProjectRoute({ params }) {
  const router = useRouter();
  const slug = params.project;
  const project = projectPages[slug];

  if (!project) {
    return null;
  }

  return (
    <Transition>
      {/* <Navbar /> */}
      <main>
        <div className='fixed left-6 top-6'>
          <button
            onClick={() => router.back()}
            className='group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground'
          >
            <svg
              viewBox='0 0 24 24'
              className='size-5 transition-transform group-hover:-translate-x-1'
              fill='none'
            >
              <path
                d='M15 18L9 12L15 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Back
          </button>
        </div>

        <ProjectPage
          title={project.title}
          description={project.description}
          media={project.media}
          link={project.link}
        />
      </main>
      <Contact />
    </Transition>
  );
}
