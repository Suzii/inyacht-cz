var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

// default routes with no controller yet
router.get('/onas', function(req, res, next) {
    res.render('pages/onas', { title: 'O nas' });
});
router.get('/vyhledavac', function(req, res, next) {
    res.render('pages/vyhledavac', { title: 'Vyhledavac' });
});
router.get('/kurzy', function(req, res, next) {
    res.render('pages/kurzy', { title: 'Kapitanske kurzy' });
});
router.get('/kontakt', function(req, res, next) {
    res.render('pages/kontakt', { title: 'Kontakt' });
});

// jachting
router.get('/destinace', function(req, res, next) {
    res.render('pages/jachting/destinace', { title: 'Express' });
});

router.get('/faq', function(req, res, next) {
    res.render('pages/jachting/faq', { title: 'Express' });
});

router.get('/novinky', function(req, res, next) {
    res.render('pages/jachting/novinky', { title: 'Express' });
});

router.get('/pocasi', function(req, res, next) {
    res.render('pages/jachting/pocasi', { title: 'Express' });
});

module.exports = router;
