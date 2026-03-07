import { thumbnailOptions } from "./thumbnail-options";

import { projectDetails } from "./project-details";

export const projectPages = thumbnailOptions.reduce(
  (acc, { href, title, image }) => {
    const slug = href.replace(/^\//, "");

    const details = projectDetails[slug] || {};

    acc[slug] = {
      slug,
      title,
      description: details.description || "Project description coming soon.",
      media: details.media || [
        {
          type: "image",
          source: image,
        },
      ],
    };

    return acc;
  },
  {}
);