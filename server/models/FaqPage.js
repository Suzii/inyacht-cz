const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class FaqPage extends ContentItem {
  // public pTitle: Fields.TextField;
  // public pLeadingParagraph: Fields.TextField;
  // public pCoverPhoto: Fields.AssetsField;
  // public pBody: Fields.RichTextField;
  // public faqs: IContentItem[];

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
      linkResolver: (link) => link.type === 'faq_page' ? `/${link.url_slug}` : undefined,
    })
  }
}

module.exports = FaqPage;
