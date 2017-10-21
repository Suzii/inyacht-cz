const express = require('express');
const router = express.Router();
const sitemap = require('./helpers/sitemap');
const getSharedModel = require('./helpers/sharedModelBuilder');

const deliveryClient = require('./kentico-cloud/deliverClient');

router.get('/', (req, res, next) => {
  deliveryClient.item('o_nas')
    .get()
    .toPromise()
    .then(response => {
      const vm = Object.assign(
        {},
        getSharedModel(sitemap.aboutUs.id),
        { item: response.item }
      );

      res.render('pages/onas', vm);
    })
    .catch(err => {
      console.log('error:' + err);
      res.render('pages/ooops', { error: JSON.stringify(err, null, 4) });
    });
});

module.exports = router;
