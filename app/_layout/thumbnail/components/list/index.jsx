'use client';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 * @param {(slug: string) => void} props.onProjectClick
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
  onProjectClick,
}) {
  const items = thumbnailOptions.map(({ href, title, type }, index) => {
    const id = index;
    const slug = href.replace(/^\//, '');
    return (
      <li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <button
          onClick={() => onProjectClick(slug)}
          className='flex w-full items-center justify-between text-left max-lg:flex-wrap'
        >
          <h4
            style={{
              fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
            }}
          >
            {title}
          </h4>
          <p className='text-lg font-medium'>{type}</p>
        </button>
      </li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
