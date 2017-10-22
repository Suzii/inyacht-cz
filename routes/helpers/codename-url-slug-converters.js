const convertToUrlSlug = (codename) => codename;
const convertToCodename = (urlSlug) => urlSlug.replace(/-/gi, '_');

module.exports = {
  convertToCodename,
  convertToUrlSlug,
}
