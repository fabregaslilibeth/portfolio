const routes = [
  {
    path: '/',
    name: 'Home',
    component: require('./pages/Home').default
  },
  {
    path: '/projects/:name',
    name: 'Project',
    component: require('./pages/Project').default
  },
]

export default routes;