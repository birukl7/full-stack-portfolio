'use client';

import { useCallback, useState } from 'react';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { projectPages, thumbnailOptions } from '@/data';
import { ProjectCard, ProjectDetailDialog } from '@/layout';

export function ProjectsClient() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = useCallback(slug => {
    const project = projectPages[slug];
    if (project) {
      setSelectedProject(project);
    }
  }, []);

  const handleCloseDialog = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section className='section-container py-12'>
        <div className='mb-10'>
          <Link
            href='/'
            className='group mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeft
              size={16}
              className='transition-transform group-hover:-translate-x-1'
            />
            back to home
          </Link>

          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
            all projects
          </h1>
          <p className='mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground'>
            A collection of web applications, mobile systems, and vanilla
            JavaScript software experiments I&apos;ve engineered.
          </p>
        </div>

        <div className='grid gap-5 sm:grid-cols-2'>
          {thumbnailOptions.map(project => (
            <ProjectCard
              key={project.href}
              project={project}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </section>

      <ProjectDetailDialog
        isOpen={selectedProject !== null}
        onClose={handleCloseDialog}
        title={selectedProject?.title}
        description={selectedProject?.description}
        media={selectedProject?.media}
        link={selectedProject?.link}
      />
    </>
  );
}
