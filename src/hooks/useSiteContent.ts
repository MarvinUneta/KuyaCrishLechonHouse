import { useMemo } from 'react';
import { defaultContent } from '../data/defaultContent';
import type { SiteContent } from '../types/content';

export const useSiteContent = () => {
  const content: SiteContent = defaultContent;

  const highlightsTimeline = useMemo(
    () => [
      {
        label: 'Next Menu Refresh',
        value: new Date(content.highlights.nextMenuRefresh).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
        }),
      },
      {
        label: 'Featured Spice',
        value: content.highlights.featuredSpice,
      },
      {
        label: 'Weekend Capacity',
        value: content.highlights.capacity,
      },
    ],
    [content],
  );

  return {
    content,
    highlightsTimeline,
  };
};

