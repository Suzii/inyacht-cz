const express = require('express');
const router = express.Router();
const sitemap = require('./helpers/sitemap');
const modelBuilder = require('./helpers/sharedModelBuilder');

/* GET home page. */
router.get('/' + sitemap.index.route, (req, res, next) => {
  Promise.resolve()
    .then(() => {
      res.render('pages/index', modelBuilder(sitemap.index.id));
    });
});

module.exports = router;
