const routes = [
  {
    path: '/',
    name: 'Home',
    component: require('./pages/Home').default
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: require('./pages/Project').default
  },
]

export default routes;