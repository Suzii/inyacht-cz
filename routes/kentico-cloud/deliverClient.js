// hack around the XHR requests to work on the server
const xhr = require('xmlhttprequest');
global.XMLHttpRequest = xhr.XMLHttpRequest;

const {
  DeliveryClient,
  DeliveryClientConfig,
  TypeResolver,
} = require('kentico-cloud-delivery-typescript-sdk');
const Page = require('./models/Page');

const typeResolvers = [
  new TypeResolver("page", () => new Page()),
];

const projectId = 'c93a27a6-8556-45f6-b5e0-6fa74415f3b2';
const deliveryClient = new DeliveryClient(
  new DeliveryClientConfig(projectId, typeResolvers)
);

module.exports = deliveryClient;

