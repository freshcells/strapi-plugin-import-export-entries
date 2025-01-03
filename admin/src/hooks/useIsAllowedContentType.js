import { request } from '@strapi/helper-plugin';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import pluginId from '../pluginId';

export const useIsAllowedContentType = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const contentType = pathname.split('/')[3]; // Get content type from URL
        const { data } = await request(`/${pluginId}/config`);
        const allowedTypes = data?.allowedExportContentTypes || [];

        // If allowedTypes is empty, all content types are allowed
        // Otherwise, check if current content type is in the allowed list
        setIsAllowed(allowedTypes.length === 0 || allowedTypes.includes(contentType));
      } catch (err) {
        console.error('Failed to fetch export configuration:', err);
        setIsAllowed(false);
      }
    };

    fetchConfig();
  }, [pathname]);

  return isAllowed;
};
