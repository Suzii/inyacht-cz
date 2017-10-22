const deliveryClient = require('./../kentico-cloud/deliverClient');

const cache = {};

const getItem = (codename) => deliveryClient.item(codename)
  .get()
  .toPromise();


const getAboutUs = () => getItem('about_us');
const getContact = () => getItem('contact');
const getSearch = () => getItem('search');
const getFaq = () => getItem('frequently_asked_questions');
const getNews = () => getItem('news_page');
const getWeather = () => getItem('weather');
const getDestinations = () => getItem('destinations');

const getNewsPost = (codename) => getItem(codename);
const getNewsPostsPreviews = () => deliveryClient
  .items()
  .type('news_post')
  .elementsParameter(['p__title', 'p__leading_paragraph', 'p__cover_photo', 'friendly_url', 'published'])
  // .orderParameter('elements.last_modified', 1)
  .get()
  .toPromise();


module.exports = {
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
