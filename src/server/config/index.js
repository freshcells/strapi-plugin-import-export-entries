'use strict';

module.exports = {
  default: {
    /**
     * Public hostname of the server.
     */
    serverPublicHostname: '',
    /**
     * List of content types that are allowed to be exported.
     * If empty, all content types can be exported.
     */
    allowedExportContentTypes: [],
  },
  validator: ({ serverPublicHostname, allowedExportContentTypes } = {}) => {
    if (typeof serverPublicHostname !== 'string') {
      throw new Error('serverPublicHostname has to be a string.');
    }
    if (!Array.isArray(allowedExportContentTypes)) {
      throw new Error('allowedExportContentTypes has to be an array.');
    }
  },
};
