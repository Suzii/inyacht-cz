const { TypeResolver } = require('kentico-cloud-delivery-typescript-sdk');

const Blockquote = require('./models/Blockquote');
const ContactData = require('./models/ContactData');
const ContactPage = require('./models/ContactPage');
const FaqPage = require('./models/FaqPage');
const InvoiceData = require('./models/InvoiceData');
const News = require('./models/News');
const Page = require('./models/Page');
const QnA = require('./models/QnA');

const typeResolvers = [
  new TypeResolver("blockquote", () => new Blockquote()),
  new TypeResolver("contact_data", () => new ContactData()),
  new TypeResolver("contact_page", () => new ContactPage()),
  new TypeResolver("faq_page", () => new FaqPage()),
  new TypeResolver("invoice_data", () => new InvoiceData()),
  new TypeResolver("news", () => new News()),
  new TypeResolver("page", () => new Page()),
  new TypeResolver("q___a", () => new QnA()),
];

module.exports = typeResolvers;
