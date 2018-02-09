const deliveryClient = require('./deliveryClient');
const { getItemCached } = require('../utils/cache');
const { translateAssetUrls } = require('../utils/translateAssetUrls');

const getItem = (codename) => {
  const query = deliveryClient.item(codename);
  console.log(`KC-API-query: ${query.toString()}`);

  return query
    .get()
    .toPromise()
    .then(translateAssetUrls)
    .then(response => {
      console.info('KC-API-received', codename);
      return response;
    });
};

const getHomepage = () => getItemCached('homepage', () => getItem('homepage'));
const getAboutUs = () => getItemCached('about_us', () => getItem('about_us'));
const getContact = () => getItemCached('contact', () => getItem('contact'));
const getSearch = () => getItemCached('search', () => getItem('search'));
const getNews = () => getItemCached('news_page', () => getItem('news_page'));
const getFaq = () => getItemCached('frequently_asked_questions', () => getItem('frequently_asked_questions'));
const getNewsPost = (codename) => getItemCached(codename, () => getItem(codename));

const getNewsPostsPreviewsKcRequest = () => {
  let query = deliveryClient
    .items()
    .type('news_post')
    .elementsParameter(['p__title', 'p__leading_paragraph', 'p__cover_photo', 'friendly_url', 'published']);

  console.log(`KC-API-query: ${query.toString()}`);

  return query
    .get()
    .toPromise()
    // .then(translateAssetUrls)
    .then(response => {
      console.info('KC-API-received', newsPostsPreviewsCacheKey);
      return response
    });
};

const newsPostsPreviewsCacheKey = 'NEWS_POSTS_PREVIEWS';
const getNewsPostsPreviews = () => getItemCached(newsPostsPreviewsCacheKey, getNewsPostsPreviewsKcRequest);


module.exports = {
  getHomepage,
  getAboutUs,
  getContact,
  getSearch,
  getFaq,
  getNews,
  getNewsPost,
  getNewsPostsPreviews,
};
