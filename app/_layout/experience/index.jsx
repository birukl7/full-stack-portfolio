'use client';

import { useState } from 'react';

import Image from 'next/image';

import { experienceData } from '@/data';

function ExperienceEntry({ entry }) {
  const isImageLogo =
    typeof entry.logo === 'string' && entry.logo.startsWith('/');

  return (
    <div className='exp-entry'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-start gap-3'>
          <div
            className={`exp-logo overflow-hidden ${
              isImageLogo ? 'bg-white p-1 ring-1 ring-border/50' : ''
            }`}
          >
            {isImageLogo ? (
              <Image
                src={entry.logo}
                alt={`${entry.company} logo`}
                width={36}
                height={36}
                className='size-full object-contain'
              />
            ) : (
              <span>{entry.logo}</span>
            )}
          </div>
          <div>
            <h3 className='exp-company'>{entry.company}</h3>
            <p className='exp-role'>
              {entry.role}
              {entry.type && <span> ({entry.type})</span>}
            </p>
          </div>
        </div>
        <span className='exp-date'>{entry.dateRange}</span>
      </div>

      {entry.bullets.length > 0 && (
        <ul className='ml-[3.25rem] mt-3 list-disc space-y-1.5 pl-4'>
          {entry.bullets.map((bullet, i) => (
            <li key={i} className='exp-bullet'>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {entry.badges.length > 0 && (
        <div className='ml-[3.25rem] mt-3 flex flex-wrap gap-2'>
          {entry.badges.map((badge, i) =>
            badge.variant === 'filled' ? (
              <a key={i} href={badge.href} className='tag-filled'>
                {badge.label}
              </a>
            ) : (
              <span key={i} className='tag'>
                {badge.label}
              </span>
            ),
          )}
        </div>
      )}
    </div>
  );
}

export function Experience() {
  const [activeTab, setActiveTab] = useState('work');
  const entries =
    activeTab === 'work' ? experienceData.work : experienceData.education;

  return (
    <section className='section-container py-8'>
      {/* Tab switcher */}
      <div className='tab-group'>
        <button
          className={`tab-btn ${activeTab === 'work' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
        <button
          className={`tab-btn ${activeTab === 'education' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>

      {/* Entries */}
      <div className='card'>
        {entries.map((entry, i) => (
          <ExperienceEntry key={`${activeTab}-${i}`} entry={entry} />
        ))}
      </div>
    </section>
  );
}
