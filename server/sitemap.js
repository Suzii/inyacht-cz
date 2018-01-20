const sitemap = {
  // first level
  index: {
    id: 'index',
    route: '/',
    view: 'pages/index',
    parentRouteId: null,
    title: 'Domů',
    menuItem: 'Domů',
    children: [],
  },
  aboutUs: {
    id: 'aboutUs',
    route: '/o-nas',
    view: 'pages/about-us',
    parentRouteId: null,
    title: 'O nás',
    menuItem: 'O nás',
    children: [],
  },
  search: {
    id: 'search',
    route: '/najit-lod',
    view: 'pages/search',
    parentRouteId: null,
    title: 'Najít loď',
    menuItem: 'Najít loď',
    children: [],
  },
  contact: {
    id: 'contact',
    route: '/kontakt',
    view: 'pages/contact',
    parentRouteId: null,
    title: 'Kontakt',
    menuItem: 'Kontakt',
    children: [],
  },
  faq: {
    id: 'faq',
    route: '/caste-otazky',
    view: 'pages/yachting/faq',
    parentRouteId: 'yachting',
    title: 'Časté otázky',
    menuItem: 'Časté otázky',
    children: [],
  },
  news: {
    id: 'news',
    route: '/#novinky',
    view: 'pages/yachting/news',
    parentRouteId: 'yachting',
    title: 'Novinky',
    menuItem: 'Novinky',
    children: [],
  },
  newsPost: {
    id: 'newsPost',
    route: '/novinky/:newsPostSlug',
    view: 'pages/yachting/newsPost',
    parentRouteId: 'yachting',
    title: 'Novinky',
    // menuItem: 'Novinky',
    // children: [],
  },
  oops: {
    id: 'oops',
    view: 'pages/oops',
    title: 'Oops',
  }
};

module.exports = sitemap;
