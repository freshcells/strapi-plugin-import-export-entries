module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/config',
      handler: 'exportAdmin.getConfig',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/export/contentTypes',
      handler: 'exportAdmin.exportData',
      config: {
        policies: [],
      },
    },
  ],
};
