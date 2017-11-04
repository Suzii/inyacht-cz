const { ContentItem } = require('kentico-cloud-delivery-typescript-sdk');

class Blockquote extends ContentItem {
  // public quote: Fields.TextField;
  // public explanation: Fields.TextField;
  // public author: Fields.TextField;
  // public image: Fields.Asset;

  constructor() {
    super({
      propertyResolver: ((fieldName) => {
        // no mapping needed
      }),
      richTextResolver: (item) => {
        return `
<blockquote class="blockquote">
  <p>${item.quote.value}</p>
  <footer><cite title="${item.author.value}">${item.author.value}</cite></footer>
</blockquote>
<p class="">${item.explanation.value}<p>
`;      }
    })
  }
}

module.exports = Blockquote;
