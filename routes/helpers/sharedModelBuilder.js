const sitemap = require('./sitemap');
const debug = require('debug')('inyacht-cz:server');

const getSharedModel = (currentRouteId) => ({
    debug: debug,
    sitemap: sitemap,
    currentRouteId: sitemap[currentRouteId].id,
    title: sitemap[currentRouteId].title,
});

module.exports = getSharedModel;
