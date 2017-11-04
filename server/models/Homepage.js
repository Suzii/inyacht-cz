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

        return fieldName;
      }),
      linkResolver: (link) => link.type === 'homepage' ? '/' : undefined,
    })
  }
}

module.exports = Homepage;
