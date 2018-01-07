const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class Page extends ContentItem {
  // public pTitle: Fields.TextField;
  // public pLeadingParagraph: Fields.TextField;
  // public pCoverPhoto: Fields.AssetsField;
  // public pBody: Fields.RichTextField;
  // public friendlyUrl: Fields.UrlSlugField;

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

        // metadata
        if (fieldName === 'metadata__meta_title') {
          return 'metaTitle';
        }

        if (fieldName === 'metadata__meta_description') {
          return 'metaDescription';
        }

        if (fieldName === 'metadata__meta_keywords') {
          return 'metaKeywords';
        }

        if (fieldName === 'metadata__meta_preview_image') {
          return 'metaPreviewImage';
        }

        return fieldName;
      }),
      linkResolver: (link) => link.type === 'page' ? link.url_slug : undefined,
    })
  }
}

module.exports = Page;
