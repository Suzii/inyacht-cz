// hack around the XHR requests to work on the server
const xhr = require('xmlhttprequest');
global.XMLHttpRequest = xhr.XMLHttpRequest;

const {
  DeliveryClient,
  DeliveryClientConfig,
} = require('kentico-cloud-delivery-typescript-sdk');
const typeResolvers = require('./typeResolvers');

const projectId = 'c93a27a6-8556-45f6-b5e0-6fa74415f3b2';
const getDeliveryClient = () => new DeliveryClient(
  new DeliveryClientConfig(
    projectId,
    typeResolvers,
    {
      enablePreviewMode: process.env.DELIVERY_PREVIEW === 'true',
      previewApiKey: process.env.PREVIEW_API_KEY,
    }),
);

module.exports = getDeliveryClient;


