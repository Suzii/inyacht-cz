const convertToUrlSlug = (codename) => codename.replace(/_/gi, '-');
const convertToCodename = (urlSlug) => urlSlug.replace(/-/gi, '_');

module.exports = {
  convertToCodename,
  convertToUrlSlug,
};
