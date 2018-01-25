const replaceAssetUrl = originalString =>
  originalString.replace('https://assets.kenticocloud.com', 'https://preview-assets.kenticocloud.com');

const translateAssetUrls = response => {
  const item = response.item;

  Object.keys(item).forEach(key => {
    if (!item[key].type)
      return;

    if (item[key].type.type === 'asset') {
      item[key].value.forEach((asset) => {
        asset.url = replaceAssetUrl(asset.url);
      });
    } else if (item[key].type.type === 'rich_text') {
      item[key].value = replaceAssetUrl(item[key].value);
    }
  });

  return response;
};

module.exports = {
  translateAssetUrls,
};
