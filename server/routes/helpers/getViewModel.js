const sitemap = require('./sitemap');
const debug = require('debug')('inyacht-cz:server');

const getViewModel = (currentRouteId, item, more) => (Object.assign({
  debug: debug,

  sitemap: sitemap,
  currentRouteId: sitemap[currentRouteId].id,
  title: sitemap[currentRouteId].title,

  item,
}, more));

module.exports = getViewModel;
