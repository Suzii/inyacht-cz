const express = require('express');
const router = express.Router();
const sitemap = require('./helpers/sitemap');
const getViewModel = require('./helpers/getViewModel');
const {
    getAboutUs,
    getContact,
    getSearch,
    getFaq,
    getNews,
    getWeather,
    getDestinations,
} = require('./providers/dataProvider');

logMe = (data) => console.log('data:', JSON.stringify(data, null, 4));

router.get(sitemap.index.route, (req, res, next) => {
  res.render(sitemap.index.view, getViewModel(sitemap.aboutUs.id, {}));
});

router.get(sitemap.aboutUs.route, (req, res, next) => {
  getAboutUs()
    .then(response => {
      res.render(sitemap.aboutUs.view, getViewModel(sitemap.aboutUs.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.search.route, (req, res, next) => {
  getSearch()
    .then(response => {
      res.render(sitemap.search.view, getViewModel(sitemap.search.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.contact.route, (req, res, next) => {
  getContact()
    .then(response => {
      res.render(sitemap.contact.view, getViewModel(sitemap.contact.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

// jachting
router.get(sitemap.destinations.route, (req, res, next) => {
  getDestinations()
    .then(response => {
      res.render(sitemap.destinations.view, getViewModel(sitemap.search.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.faq.route, (req, res, next) => {
  getFaq()
    .then(response => {
      res.render(sitemap.faq.view, getViewModel(sitemap.faq.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

// TODO also nested routes of articles
router.get(sitemap.news.route, (req, res, next) => {
  getNews()
    .then(response => {
      res.render(sitemap.news.view, getViewModel(sitemap.news.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.weather.route, (req, res, next) => {
  getWeather()
    .then(response => {
      res.render(sitemap.weather.view, getViewModel(sitemap.weather.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get("*", (req, res, next) => {
      res.render('pages/ooops', { error: "Page not found" });
});

module.exports = router;
