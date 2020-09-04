// config/plugin.js
const path = require('path');
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.ua = {
  enable: true,
  package: 'egg-ua',
};
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};