const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class NewsPost extends ContentItem {
  // public pTitle: Fields.TextField;
  // public pLeadingParagraph: Fields.TextField;
  // public pCoverPhoto: Fields.AssetsField;
  // public pBody: Fields.RichTextField;
  // public friendlyUrl: Fields.UrlSlugField;
  // public published: Fields.DateTime;

  constructor() {
    super({
      propertyResolver: ((fieldName) => {

        if (fieldName === 'p__title') {
          return 'pTitle';
        }

        if (fieldName === 'p__leading_paragraph') {
          return 'pLeadingParagraph';
        }

        if (fieldName === 'p__cover_photo') {
          return 'pCoverPhoto';
        }

        if (fieldName === 'p__body') {
          return 'pBody';
        }

        if (fieldName === 'friendly_url') {
          return 'friendlyUrl';
        }

        if (fieldName === 'published') {
          return 'published';
        }

        return fieldName;
      }),
      linkResolver: (link) => link.type === 'news_post' ? `news/${link.url_slug}` : undefined,
    })
  }
}

module.exports = NewsPost;
