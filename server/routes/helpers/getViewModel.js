const sitemap = require('../../sitemap');
const debug = require('debug')('inyacht-cz:server');

const getViewModel = (currentRouteId, item, more) => (Object.assign({
  debug: debug,
  bookingCss: 'https://inyacht-preview.herokuapp.com/css/booking-manager.css',

  sitemap: sitemap,
  currentRouteId: sitemap[currentRouteId].id,
  title: sitemap[currentRouteId].title,

  item,
}, more));

module.exports = getViewModel;
