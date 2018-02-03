const sitemap = require('../../sitemap');

const liveDomain = 'https://inyacht.cz';
const localhost = 'http://localhost:3000';

const getViewModel = (currentRouteId, item, more) => (Object.assign({
  config: {
    allowChat: false,
  },

  bookingCssLg: `${liveDomain}/css/booking-manager.css`,
  bookingCssSm: `${liveDomain}/css/booking-manager-small.css`,
  controllerPage: `${process.env.NODE_ENV === 'production' ? liveDomain : localhost}/najit-lod`,

  sitemap: sitemap,
  currentRouteId: sitemap[currentRouteId].id,
  title: sitemap[currentRouteId].title,

  // TODO: one day, this will be obtained from Kentico Cloud
  contactData: {
    email: { value: 'charter@inyacht.cz' },
    phoneNumber: { value: '+420 777 995 349' },
    facebookUrl: { value: 'http://facebook.com/InYacht' },
    instagramUrl: { value: 'http://instagram.com/inyacht' },
    twitterUrl: { value: 'http://twitter.com/InYacht_CZ' },
  },

  item: item,
}, more));

module.exports = getViewModel;
