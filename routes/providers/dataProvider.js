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

module.exports = {
  getAboutUs,
  getContact,
  getSearch,
  getFaq,
  getNews,
  getWeather,
  getDestinations,
};
