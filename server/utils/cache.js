let cache = {};

const clearCache = () => {
  cache = {};
  console.log('Cache cleared...');
};

const getItemCached = (cacheKey, getValue) => {
  if (process.env.DELIVERY_PREVIEW === 'true') {
    console.log('Working with delivery preview api, sending request to KC...');
    return getValue();
  }

  if (!cache[cacheKey]) {
    console.log(`Cache miss for ${cacheKey}`);
    cache[cacheKey] = getValue();
  }

  return cache[cacheKey];
};

module.exports = {
  clearCache,
  getItemCached,
};
