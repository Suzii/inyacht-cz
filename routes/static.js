const express = require('express');
const router = express.Router();
const sitemap = require('./helpers/sitemap');
const modelBuilder = require('./helpers/modelBuilder');

// default routes with no controller yet
router.get('/' + sitemap.aboutUs.route, (req, res, next) => {
    const model = modelBuilder(sitemap.aboutUs.id);

    console.log(model);

    res.render('pages/onas', model);
});
router.get('/' + sitemap.search.route, (req, res, next) => {
    const model = modelBuilder(sitemap.search.id);

    res.render('pages/vyhledavac', model);
});
router.get('/' + sitemap.courses.route, (req, res, next) => {
    const model = modelBuilder(sitemap.courses.id);

    res.render('pages/kurzy', model);
});
router.get('/' + sitemap.contact.route, (req, res, next) => {
    const model = modelBuilder(sitemap.contact.id);

    res.render('pages/kontakt', model);
});

// jachting
router.get('/' + sitemap.destinations.route, (req, res, next) => {
    const model = modelBuilder(sitemap.destinations.id);

    res.render('pages/jachting/destinace', model);
});

router.get('/' + sitemap.faq.route, (req, res, next) => {
    const model = modelBuilder(sitemap.faq.id);

    res.render('pages/jachting/faq', model);
});

router.get('/' + sitemap.news.route, (req, res, next) => {
    const model = modelBuilder(sitemap.news.id);

    res.render('pages/jachting/novinky', model);
});

router.get('/' + sitemap.weather.route, (req, res, next) => {
    const model = modelBuilder(sitemap.weather.id);

    res.render('pages/jachting/pocasi', model);
});

module.exports = router;
