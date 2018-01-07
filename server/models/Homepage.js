const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class Homepage extends ContentItem {
  constructor() {
    super({
      propertyResolver: ((fieldName) => {
        if (fieldName === 'first_picture_of_cover_video') {
          return 'firstPictureOfCoverVideo';
        }

        if (fieldName === 'cover_video') {
          return 'coverVideo';
        }

        if (fieldName === 'news_page') {
          return 'newsPage';
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
      linkResolver: (link) => link.type === 'homepage' ? '/' : undefined,
    })
  }
}

module.exports = Homepage;
