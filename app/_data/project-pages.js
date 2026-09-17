import { projectDetails } from './project-details';
import { thumbnailOptions } from './thumbnail-options';

export const projectPages = thumbnailOptions.reduce(
  (acc, { href, title, image, link }) => {
    const slug = href.replace(/^\//, '');

    const details = projectDetails[slug] || {};

    acc[slug] = {
      slug,
      title,
      link: link || details.link || null,
      description: details.description || ['Project description coming soon.'],
      media: details.media || [
        {
          type: 'image',
          source: image,
        },
      ],
    };

    return acc;
  },
  {},
);
