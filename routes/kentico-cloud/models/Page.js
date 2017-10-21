const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class Page extends ContentItem {
  // title: data.item.elements.p__title.value,
  // leadingParagraph: data.item.elements.p__leading_paragraph.value,
  // coverImage: data.item.elements.p__cover_photo.value[0],
  // text: data.item.elements.p__body.value,

  constructor() {
    super({
      propertyResolver: (fieldName) => {
        switch (fieldName) {
          case 'p__title': return 'title';
          case 'p__leading_paragraph': return 'leadingParagraph';
          case 'p__cover_photo': return 'coverImage';
          case 'p__body': return 'text';
        }
      }
    });
  }
}
