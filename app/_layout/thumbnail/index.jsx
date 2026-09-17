'use client';

import { useCallback, useState } from 'react';

import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { projectPages, thumbnailOptions } from '@/data';

import { ProjectDetailDialog } from '../project-dialog';

export const techStacks = {
  'nodd-ticket': ['Next.js', 'Supabase', 'Heavy Drag & Drop'],
  'excelet-academy': ['Laravel', 'Laravel Sanctum', 'Laravel API'],
  serdo: ['Laravel', 'E-commerce', 'Inertia.js', 'React.js'],
  placeopia: ['Laravel', 'React Native', 'Figma'],
  'space-invaders': [
    'Vanilla JS',
    'HTML5 Canvas',
    'Game Physics',
    'Data Structures',
  ],
  'my-habit': [
    'Next.js',
    'Telegram Bot API',
    'Calendar & Streaks',
    'Gamification',
  ],
};

export function ProjectCard({ project, onProjectClick }) {
  const slug = project.href.replace(/^\//, '');
  const tags = techStacks[slug] || [];
  const imageUrl =
    project.image && project.image.startsWith('/')
      ? project.image
      : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}/image/upload/${project.image}`;
  const sourceUrl = project.source || null;
  const liveUrl = project.link || null;

  return (
    <div
      className='project-card group cursor-pointer'
      onClick={() => onProjectClick(slug)}
    >
      <div className='project-card-img'>
        <Image
          src={imageUrl}
          fill={true}
          sizes='(max-width: 768px) 100vw, 50vw'
          alt={project.title}
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>
      <div className='project-card-body'>
        <h3 className='project-card-title'>{project.title}</h3>
        <p className='project-card-desc'>
          {project.description || project.type}
        </p>
        <div className='project-card-tags'>
          {tags.map(tag => (
            <span key={tag} className='tag'>
              {tag}
            </span>
          ))}
        </div>
        <div className='project-card-actions'>
          <button className='tag-filled'>Details</button>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-ghost'
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink size={13} />
              {slug === 'space-invaders' ? 'Play' : 'Visit'}
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-ghost'
              onClick={e => e.stopPropagation()}
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Thumbnail() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = thumbnailOptions.filter(
    project => project.featured !== false,
  );

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
      <section id='projects' className='section-container py-8'>
        {/* Section header */}
        <div className='section-header'>
          <h2 className='section-title'>Projects</h2>
          <Link href='/projects' className='section-link'>
            view more <ArrowRight size={14} />
          </Link>
        </div>

        {/* Project grid */}
        <div className='grid gap-5 sm:grid-cols-2'>
          {featuredProjects.map(project => (
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
