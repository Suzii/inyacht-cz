const linkResolver = (link) => {
  switch (link.type) {
    case 'page':
    case 'contact_page':
      return `/${link.url_slug}`;
    default:
      return '#';
  }
};

module.exports = linkResolver;
