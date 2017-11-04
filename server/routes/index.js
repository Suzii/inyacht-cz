const express = require('express');
const router = express.Router();
const sitemap = require('../sitemap');
const getViewModel = require('./helpers/getViewModel');
const { convertToCodename } = require('./helpers/codename-url-slug-converters');
const { clearCache } = require('../providers/cache');
const {
  getAboutUs,
  getContact,
  getSearch,
  getFaq,
  getNews,
  getNewsPost,
  getNewsPostsPreviews,
  getWeather,
  getDestinations,
} = require('../providers/dataProvider');

logMe = (data) => console.log('data:', JSON.stringify(data, null, 4));

router.get('/webhook', (req, res, next) => {
  clearCache();
  res.send('Webhook called, cache cleared...');
});

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
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.search.route, (req, res, next) => {
  getSearch()
    .then(response => {
      res.render(sitemap.search.view, getViewModel(sitemap.search.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.contact.route, (req, res, next) => {
  getContact()
    .then(response => {
      res.render(sitemap.contact.view, getViewModel(sitemap.contact.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.destinations.route, (req, res, next) => {
  getDestinations()
    .then(response => {
      res.render(sitemap.destinations.view, getViewModel(sitemap.search.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.faq.route, (req, res, next) => {
  getFaq()
    .then(response => {
      res.render(sitemap.faq.view, getViewModel(sitemap.faq.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.newsPost.route, (req, res, next) => {
  getNewsPost(convertToCodename(req.params.newsPostSlug))
    .then(response => {
      res.render(sitemap.newsPost.view, getViewModel(sitemap.newsPost.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.news.route, (req, res, next) => {
  const newsPromise = getNews();
  const newsPostsPreviewPromise = getNewsPostsPreviews();

  Promise.all([newsPromise, newsPostsPreviewPromise])
    .then(responses => {
      const newsResponse = responses[0];
      const postsResponse = responses[1];
      res.render(sitemap.news.view, getViewModel(sitemap.news.id, newsResponse.item, { posts: postsResponse.items }))
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get(sitemap.weather.route, (req, res, next) => {
  getWeather()
    .then(response => {
      res.render(sitemap.weather.view, getViewModel(sitemap.weather.id, response.item));
    })
    .catch((err) => {
      console.error('Error:' + err);
      res.render('pages/oops', { error: JSON.stringify(err, null, 4) });
    });
});

router.get("*", (req, res, next) => {
  res.render('pages/oops',  getViewModel(sitemap.oops.id, null, { error: '404 - page not found' }));
});

module.exports = router;
