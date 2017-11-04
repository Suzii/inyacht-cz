const deliveryClient = require('./deliveryClient');
const { getItemCached } = require('../utils/cache');

const getItem = (codename) => {
  console.log('KC API: ', codename);
  return deliveryClient.item(codename)
    .get()
    .toPromise();
};

const getHomepage = () => getItemCached('homepage', () => getItem('homepage'));
const getAboutUs = () => getItemCached('about_us', () => getItem('about_us'));
const getContact = () => getItemCached('contact', () => getItem('contact'));
const getSearch = () => getItemCached('search', () => getItem('search'));
const getFaq = () => getItemCached('frequently_asked_questions', () => getItem('frequently_asked_questions'));
const getNews = () => getItemCached('news_page', () => getItem('news_page'));
const getWeather = () => getItemCached('weather', () => getItem('weather'));
const getDestinations = () => getItemCached('destinations', () => getItem('destinations'));
const getNewsPost = (codename) => getItemCached(codename, () => getItem(codename));

const getNewsPostsPreviewsKcRequest = () => {
  console.log('KC API: news previews');
  return deliveryClient
    .items()
    .type('news_post')
    .elementsParameter(['p__title', 'p__leading_paragraph', 'p__cover_photo', 'friendly_url', 'published'])
    // .orderParameter('elements.last_modified', 1)
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
  getNews,
  getNewsPost,
  getNewsPostsPreviews,
  getWeather,
  getDestinations,
};
