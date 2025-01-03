import { request } from '@strapi/helper-plugin';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import pluginId from '../../pluginId';
import { ExportButton } from '../ExportButton';

export const InjectedExportCollectionType = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const contentType = pathname.split('/')[3]; // Get content type from URL
        const { data } = await request(`/${pluginId}/config`);
        console.log('data', data);
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

  console.log('isAllowed', isAllowed);

  if (!isAllowed) {
    return null;
  }

  return <ExportButton unavailableOptions={['exportPluginsContentTypes', 'relationsAsId', 'deepness']} />;
};
