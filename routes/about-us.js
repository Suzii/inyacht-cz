const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const sitemap = require('./helpers/sitemap');
const modelBuilder = require('./helpers/modelBuilder');

router.get('/', (req, res, next) => {

  fetch('https://deliver.kenticocloud.com/c93a27a6-8556-45f6-b5e0-6fa74415f3b2/items/o_nas')
    .then(response => response.ok? response.json() : Promise.reject(new Error(response)))
    .then((data) => {

      const item = {
        title: data.item.elements.p__title.value,
        leadingParagraph: data.item.elements.p__leading_paragraph.value,
        coverImage: data.item.elements.p__cover_photo.value[0],
        text: data.item.elements.p__body.value,
      };
      const model = modelBuilder(sitemap.aboutUs.id);

      res.render('pages/onas', Object.assign({}, model, { item }));
    })
    .catch((err) => {
      console.error('Erorrrrrrr', err);
      res.render('pages/ooops', { error: JSON.stringify(err) });
    });
});

module.exports = router;
