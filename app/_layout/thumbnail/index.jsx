'use client';

import { useCallback, useRef, useState } from 'react';

import { projectPages } from '@/data';
import { useFollowPointer } from '@/hooks';

import {
  ThumbnailAction,
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailLabel,
  ThumbnailList,
  ThumbnailModal,
} from './components';
import { scaleUp } from './variants';
import { ProjectDetailDialog } from '../project-dialog';

export function Thumbnail() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const modal = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const cursor = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const label = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

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
      <section
        className='container relative'
        onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
      >
        <div className='my-8 flex flex-col gap-10'>
          <ThumbnailLabel>Recent work</ThumbnailLabel>
          <ThumbnailList
            handlePointerEnter={handlePointerEnter}
            handlePointerLeave={handlePointerLeave}
            moveItems={moveItems}
            onProjectClick={handleProjectClick}
          />
          <ThumbnailModal
            ref={modal}
            variants={scaleUp}
            active={active}
            index={index}
          />
          <ThumbnailCursorCircle
            ref={cursor}
            variants={scaleUp}
            active={active}
          />
          <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
            View
          </ThumbnailCursorLabel>
          {/* <ThumbnailAction>
            More work<sup className='text-muted-foreground'>14</sup>
          </ThumbnailAction> */}
        </div>
      </section>

      <ProjectDetailDialog
        isOpen={selectedProject !== null}
        onClose={handleCloseDialog}
        title={selectedProject?.title}
        description={selectedProject?.description}
        media={selectedProject?.media}
      />
    </>
  );
}
