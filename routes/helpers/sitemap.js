const sitemap = {
    // first level
    index: {
        id: 'index',
        route: '/',
        view: 'pages/index',
        parentRouteId: null,
        title: 'InYacht',
        menuItem: 'InYacht',
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
        route: '/vyhledavac',
        view: 'pages/search',
        parentRouteId: null,
        title: 'Vyhledávač',
        menuItem: 'Vyhledávač',
        children: [],
    },
    yachting: {
        id: 'yachting',
        route: '/jachting',
        view: 'pages/yachting',
        parentRouteId: null,
        title: 'Námořní jachting',
        menuItem: 'Námořní jachting',
        children: ['destinations', 'faq', 'news', 'weather'],
    },
    courses: {
        id: 'courses',
        route: '/kapitanske-kurzy',
        view: 'pages/courses',
        parentRouteId: null,
        title: 'Kapitánske kurzy',
        menuItem: 'Kapitánske kurzy',
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
    // second level
    destinations: {
        id: 'destinations',
        route: '/destinace',
        view: 'pages/yachting/destinations',
        parentRouteId: 'yachting',
        title: 'Destinace',
        menuItem: 'Destinace',
        children: [],
    },
    faq: {
        id: 'faq',
        route: '/faq',
        view: 'pages/yachting/faq',
        parentRouteId: 'yachting',
        title: 'Faq',
        menuItem: 'Faq',
        children: [],
    },
    news: {
        id: 'news',
        route: '/novinky',
        view: 'pages/yachting/news',
        parentRouteId: 'yachting',
        title: 'Novinky',
        menuItem: 'Novinky',
        children: [],
    },
    weather: {
        id: 'weather',
        route: '/pocasi',
        view: 'pages/yachting/weather',
        parentRouteId: 'yachting',
        title: 'Počasi',
        menuItem: 'Počasí na moři',
        children: [],
    },
};

module.exports = sitemap;
