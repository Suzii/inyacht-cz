const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class ContactPage extends ContentItem {
  // public pTitle: Fields.TextField;
  // public pLeadingParagraph: Fields.TextField;
  // public pCoverPhoto: Fields.AssetsField;
  // public pBody: Fields.RichTextField;
  // public invoiceData: IContentItem[];
  // public contactData: IContentItem[];
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

        if (fieldName === 'invoice_data') {
          return 'invoiceData';
        }

        if (fieldName === 'invoice_data_section_title') {
          return 'invoiceDataSectionTitle';
        }

        if (fieldName === 'contact_data_section_title') {
          return 'contactDataSectionTitle';
        }

        if (fieldName === 'contact_data') {
          return 'contactData';
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
      linkResolver: (link) => link.type === 'contact_page' ? `/${link.url_slug}` : undefined,
    })
  }
}

module.exports = ContactPage;
