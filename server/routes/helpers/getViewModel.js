const sitemap = require('../../sitemap');
const debug = require('debug')('inyacht-cz:server');

const getViewModel = (currentRouteId, item, more) => (Object.assign({
  debug: debug,
  // bookingCss: 'https://localhost:3000/css/booking-manager.css',
  bookingCss: 'https://inyacht.herokuapp.com/css/booking-manager.css',

  sitemap: sitemap,
  currentRouteId: sitemap[currentRouteId].id,
  title: sitemap[currentRouteId].title,

  item,
}, more));

module.exports = getViewModel;
