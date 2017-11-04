const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class ContactData extends ContentItem {
  // public email: Fields.TextField;
  // public phoneNumber: Fields.TextField;
  // public facebookUrl: Fields.TextField;
  // public twitterUrl: Fields.TextField;
  // public instagramUrl: Fields.TextField;

  constructor() {
    super({
      propertyResolver: ((fieldName) => {

        if (fieldName === 'phone_number') {
          return 'phoneNumber';
        }

        if (fieldName === 'facebook_url') {
          return 'facebookUrl';
        }

        if (fieldName === 'twitter_url') {
          return 'twitterUrl';
        }

        if (fieldName === 'instagram_url') {
          return 'instagramUrl';
        }

        return fieldName;
      })
    })
  }
}

module.exports = ContactData;
