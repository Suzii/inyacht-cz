const sitemap = require('./sitemap');
const debug = require('debug')('inyacht-cz:server');

const getViewModel = (currentRouteId, item) => ({
  debug: debug,

  sitemap: sitemap,
  currentRouteId: sitemap[currentRouteId].id,
  title: sitemap[currentRouteId].title,

  item,
});

module.exports = getViewModel;
