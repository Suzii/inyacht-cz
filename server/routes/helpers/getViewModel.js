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

  // TODO: one day, this will be obtained from Kentico Cloud
  contactData: {
    email: {value: 'charter@inyacht.cz'},
    phoneNumber: {value: '+420 777 995 349'},
    facebookUrl: {value: 'http://facebook.com/InYacht'},
    instagramUrl: {value: 'http://twitter.com/inyacht'},
    twitterUrl: {value: 'http://instagram.com/InYacht_CZ'},
  },

  item: item,
}, more));

module.exports = getViewModel;
