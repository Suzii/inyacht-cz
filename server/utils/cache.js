var debug = require('debug')('inyacht-cz:server');

let cache = {};
const clearCache = () => {
  cache = {};
  debug('Cache cleared...');
};

const getItemCached = (cacheKey, getValue) => {
  if (debug) {
    debug('Caching not allowed, sending request to KC.');
    return getValue();
  }

  if (!cache[cacheKey]) {
    debug('Cache miss: ', cacheKey);
    cache[cacheKey] = getValue();
  }

  return cache[cacheKey];
};

module.exports = {
  clearCache,
  getItemCached,
};
