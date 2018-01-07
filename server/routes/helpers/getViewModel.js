const sitemap = require('../../sitemap');
const debug = require('debug')('inyacht-cz:server');

const getViewModel = (currentRouteId, item, more) => (Object.assign({
  debug: debug,
  bookingCssLg: `${process.env.LIVE_DOMAIN}/css/booking-manager.css`,
  bookingCssSm: `${process.env.LIVE_DOMAIN}/css/booking-manager-small.css`,
  controllerPage: process.env.local ? 'http://localhost:3000/najit-lod' : `${process.env.LIVE_DOMAIN}/najit-lod`,

  sitemap: sitemap,
  currentRouteId: sitemap[currentRouteId].id,
  title: sitemap[currentRouteId].title,

  item,
}, more));

module.exports = getViewModel;
