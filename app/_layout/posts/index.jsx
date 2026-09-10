'use client';

import { ArrowRight, Calendar, Clock, Eye } from 'lucide-react';

const posts = [
  {
    title: 'Building an Enterprise Task Manager from Scratch',
    date: 'August 28, 2026',
    readTime: '8 min read',
    views: '1.2K views',
    description:
      'A deep dive into how I architected NODD Ticket — a ClickUp alternative — covering real-time collaboration, drag-and-drop Kanban, and Gmail integration.',
    tags: ['Full Stack', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Scaling an E-Learning Platform to 1000+ Students',
    date: 'July 12, 2026',
    readTime: '6 min read',
    views: '864 views',
    description:
      'Lessons learned building Excelet Academy — from database design and API optimization to deploying a cross-platform React Native app for Ethiopian students.',
    tags: ['Backend', 'React Native', 'Education', 'API Design'],
  },
];

function PostEntry({ post }) {
  return (
    <article className='post-entry'>
      <div className='flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between'>
        <h3 className='post-title cursor-pointer'>{post.title}</h3>
        <div className='post-meta shrink-0'>
          <span className='flex items-center gap-1'>
            <Calendar size={12} /> {post.date}
          </span>
        </div>
      </div>

      <div className='post-meta mt-1'>
        <span className='flex items-center gap-1'>
          <Clock size={12} /> {post.readTime}
        </span>
        <span className='flex items-center gap-1'>
          <Eye size={12} /> {post.views}
        </span>
      </div>

      <p className='post-desc'>{post.description}</p>

      <div className='post-tags'>
        {post.tags.map(tag => (
          <span key={tag} className='tag'>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Posts() {
  return (
    <section id='blog' className='section-container py-8'>
      <div className='section-header'>
        <h2 className='section-title'>recent posts</h2>
        <span className='section-link cursor-pointer'>
          view more <ArrowRight size={14} />
        </span>
      </div>

      <div className='card'>
        {posts.map(post => (
          <PostEntry key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
