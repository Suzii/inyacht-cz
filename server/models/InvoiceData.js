const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class InvoiceData extends ContentItem {
  // public companyName: Fields.TextField;
  // public addressStreet: Fields.TextField;
  // public addressCity: Fields.TextField;
  // public ic: Fields.TextField;
  // public dic: Fields.TextField;

  constructor() {
    super({
      propertyResolver: ((fieldName) => {

        if (fieldName === 'company_name') {
          return 'companyName';
        }

        if (fieldName === 'address___street') {
          return 'addressStreet';
        }

        if (fieldName === 'address___city') {
          return 'addressCity';
        }

        return fieldName;
      })
    })
  }
}

module.exports = InvoiceData;
