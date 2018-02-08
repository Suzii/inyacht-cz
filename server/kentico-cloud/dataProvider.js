const deliveryClient = require('./deliveryClient');
const { getItemCached } = require('../utils/cache');
const { translateAssetUrls } = require('../utils/translateAssetUrls');

const getItem = (codename) => {
  let query = deliveryClient.item(codename);
  console.log(`KC-API-query: ${query.toString()}`);

  return query
    .get()
    .toPromise()
    .then(translateAssetUrls);
};

const getHomepage = () => getItemCached('homepage', () => getItem('homepage'));
const getAboutUs = () => getItemCached('about_us', () => getItem('about_us'));
const getContact = () => getItemCached('contact', () => getItem('contact'));
const getSearch = () => getItemCached('search', () => getItem('search'));
const getFaq = () => getItemCached('frequently_asked_questions', () => getItem('frequently_asked_questions'));
const getNewsPost = (codename) => getItemCached(codename, () => getItem(codename));

const getNewsPostsPreviewsKcRequest = () => {
  console.log('KC API: news previews');
  return deliveryClient
    .items()
    .type('news_post')
    .elementsParameter(['p__title', 'p__leading_paragraph', 'p__cover_photo', 'friendly_url', 'published'])
    .get()
    .toPromise();
};

const newsPostsPreviewsCacheKey = 'NEWS_POSTS_PREVIEWS';
const getNewsPostsPreviews = () => getItemCached(newsPostsPreviewsCacheKey, getNewsPostsPreviewsKcRequest);


module.exports = {
  getHomepage,
  getAboutUs,
  getContact,
  getSearch,
  getFaq,
  getNewsPost,
  getNewsPostsPreviews,
};
