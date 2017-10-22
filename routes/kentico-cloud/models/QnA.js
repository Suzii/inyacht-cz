const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class QnA extends ContentItem {
  // public question: Fields.TextField;
  // public answer: Fields.RichTextField;
  // public friendlyUrl: Fields.UrlSlugField;

  constructor() {
    super({
      propertyResolver: ((fieldName) => {

        if (fieldName === 'friendly_url') {
          return 'friendlyUrl';
        }

        return fieldName;
      }),
      linkResolver: (link) => link.type === 'q___a' ? `/faq#${link.url_slug}` : undefined,
    })
  }
}

module.exports = QnA;
