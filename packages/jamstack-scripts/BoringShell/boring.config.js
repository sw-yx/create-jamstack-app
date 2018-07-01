// todo: move this out into the actual app
// import axios from 'axios';

export default {
  getSiteData: () => ({
    title: 'Create JAMstack App',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
      },
      {
        path: '/about',
      },
      {
        path: '/blog',
      },
    ];
  },
};
