import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usersettings',
    name: 'usersettings',
    
    component: () => import(/* webpackChunkName: "usersettings" */ '../views/UserView.vue'),
    props: true,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    
    component: () => import(/* webpackChunkName: "movie" */ '../views/SingleMovieView.vue'),
    props: true,
  },
  {
    path: '/test',
    name: 'test',
    
    component: () => import(/* webpackChunkName: "test" */ '../views/TestAreaView.vue'),
    
  },
  {
    path: '/favorites',
    name: 'favorites',
    
    component: () => import(/* webpackChunkName: "myarea" */ '../views/FavoriteView.vue'),
    props: true,
  },
  {
    path: '/search/:type:content',
    // path: '/search',
    name: 'search',
    props: true,

    component: () => import(/* webpackChunkName: "search" */ '../views/SearchStreamView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginUserView.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    
    component: () => import(/* webpackChunkName: "404" */ '../components/TheNotFoundPage.vue'),
    // redirect: "/", 
    // Sollte das redirect-Attribut gesetzt sein, wird keine NotFoundPage aufgerufen,
    // sondern es wird automatisch zum angegeben Pfad navigiert.
  },
  {
    path: "/",
    
    component: () => import(/* webpackChunkName: "404" */ '../views/IntroView.vue'),
    // redirect: "/", 
    // Sollte das redirect-Attribut gesetzt sein, wird keine NotFoundPage aufgerufen,
    // sondern es wird automatisch zum angegeben Pfad navigiert.
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
