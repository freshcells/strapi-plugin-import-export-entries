import React from 'react';

import { useIsAllowedContentType } from '../../hooks/useIsAllowedContentType';
import { ExportButton } from '../ExportButton';

export const InjectedExportCollectionType = () => {
  const isAllowed = useIsAllowedContentType();

  if (!isAllowed) {
    return null;
  }

  return <ExportButton unavailableOptions={['exportPluginsContentTypes', 'relationsAsId', 'deepness']} />;
};
