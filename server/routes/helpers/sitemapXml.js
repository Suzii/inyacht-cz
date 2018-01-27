const appSitemap = require('../../sitemap');
const sm = require('sitemap');

const sitemapXml = sm.createSitemap ({
  hostname: 'https://inyacht.cz',
  cacheTime: 60*60*1000,        // 600 sec - cache purge period
  urls: [
    { url: appSitemap.index.route, changefreq: 'weekly', priority: 0.3 },
    { url: appSitemap.aboutUs.route, changefreq: 'weekly',  priority: 0.7 },
    { url: appSitemap.faq.route, changefreq: 'weekly',  priority: 0.5 },
    { url: appSitemap.contact.route, changefreq: 'weekly', priority: 0.5 },
    { url: appSitemap.search.route, changefreq: 'weekly', priority: 0.7 },
  ]
});

module.exports = { sitemapXml };
