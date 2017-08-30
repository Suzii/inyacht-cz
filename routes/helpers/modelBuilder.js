const sitemap = require('./sitemap');

const getSharedModel = (currentRouteId) => ({
    sitemap: sitemap,
    currentRouteId: sitemap[currentRouteId].id,
    title: sitemap[currentRouteId].title,
});

module.exports = getSharedModel;
