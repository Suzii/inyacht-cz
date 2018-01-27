const express = require('express');
const router = express.Router();
const sitemap = require('../sitemap');
const getViewModel = require('./helpers/getViewModel');
const { convertToCodename } = require('./helpers/codename-url-slug-converters');
const { clearCache } = require('../utils/cache');
const {
  getHomepage,
  getAboutUs,
  getContact,
  getSearch,
  getFaq,
  getNews,
  getNewsPost,
  getNewsPostsPreviews,
} = require('../kentico-cloud/dataProvider');

logMe = (data) => console.log('data:', JSON.stringify(data, null, 4));

router.get('/webhook', (req, res, next) => {
  clearCache();
  res.send('Webhook called, cache cleared...');
});

if (process.env.SITE_UNDER_CONSTRUCTION === 'true') {
  router.get('*', (req, res, next) => {
    let viewModel = getViewModel(sitemap.siteUnderConstruction.id, null);
    res.render(sitemap.siteUnderConstruction.view, viewModel)
  });
}
router.get(sitemap.index.route, (req, res, next) => {
  const homepagePromise = getHomepage();
  const newsPostsPreviewPromise = getNewsPostsPreviews();

  Promise.all([homepagePromise, newsPostsPreviewPromise])
    .then(responses => {
      const homepageResponse = responses[0];
      const postsResponse = responses[1];
      res.render(sitemap.index.view, getViewModel(sitemap.index.id, homepageResponse.item, { posts: postsResponse.items }))
    })
    .catch(handleServerError);
});

router.get(sitemap.aboutUs.route, (req, res, next) => {
  getAboutUs()
    .then(response => {
      res.render(sitemap.aboutUs.view, getViewModel(sitemap.aboutUs.id, response.item));
    })
    .catch(handleServerError);
});

router.get(sitemap.search.route, (req, res, next) => {
  getSearch()
    .then(response => {
      res.render(sitemap.search.view, getViewModel(sitemap.search.id, response.item));
    })
    .catch(handleServerError);
});

router.post(sitemap.search.route, (req, res, next) => {
  let params = '';
  for (let obj in req.body) {
    if (obj !== 'controllerPage' && obj !== 'customCssPath' && obj !== 'setlang' && obj !== 'companyid') {
      params = `${params}${obj}=${req.body[obj]}&`;
    }
  }

  getSearch()
    .then(response => {
      res.render(sitemap.search.view, getViewModel(sitemap.search.id, response.item, { params }));
    })
    .catch(handleServerError);
});

router.get(sitemap.contact.route, (req, res, next) => {
  getContact()
    .then(response => {
      res.render(sitemap.contact.view, getViewModel(sitemap.contact.id, response.item));
    })
    .catch(handleServerError);
});

router.get(sitemap.faq.route, (req, res, next) => {
  getFaq()
    .then(response => {
      res.render(sitemap.faq.view, getViewModel(sitemap.faq.id, response.item));
    })
    .catch(handleServerError);
});

router.get(sitemap.newsPost.route, (req, res, next) => {
  getNewsPost(convertToCodename(req.params.newsPostSlug))
    .then(response => {
      res.render(sitemap.newsPost.view, getViewModel(sitemap.newsPost.id, response.item));
    })
    .catch(handleServerError);
});

// router.get(sitemap.news.route, (req, res, next) => {
//   const newsPromise = getNews();
//   const newsPostsPreviewPromise = getNewsPostsPreviews();
//
//   Promise.all([newsPromise, newsPostsPreviewPromise])
//     .then(responses => {
//       const newsResponse = responses[0];
//       const postsResponse = responses[1];
//       res.render(sitemap.news.view, getViewModel(sitemap.news.id, newsResponse.item, { posts: postsResponse.items }))
//     })
//     .catch(handleServerError);
// });

const handleServerError = (err) => {
  console.error('Error:' + err);
  res.render('pages/oops', { config: {}, error: JSON.stringify(err, null, 4) });
};

router.get('*', (req, res, next) => {
  console.error('Page not found', req.url);
  res.render('pages/oops',  getViewModel(sitemap.oops.id, null, { error: '404 - page not found' }));
});

module.exports = router;
