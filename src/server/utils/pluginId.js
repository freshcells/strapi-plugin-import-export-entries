const pluginPkg = require('../../package.json');

const pluginId = pluginPkg.name.replace(/^@[^/]+\//, '').replace(/^strapi-plugin-|^plugin-/, '');

module.exports = pluginId;
