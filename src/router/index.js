import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'pages/index/Index.vue'
import MovieList from 'pages/index/MovieList.vue'
import Moving from 'pages/index/Moving.vue'
import Coming from 'pages/index/Coming.vue'
import Cinema from 'pages/cinema/Cinema.vue'
import News from 'pages/news/News.vue'
import Profile from 'pages/profile/Profile.vue'
import Position from 'pages/position/Position.vue'
import CinemaDetails from 'pages/details/CinemaDetails.vue'
import Search from 'pages/search/Search.vue'
import MovieDetails from 'pages/details/MovieDetails.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index/movielist/moving'
  },
  {
    path: '/moviedetails/:id',
    component: MovieDetails
  },
  {
    path: '/pos',
    component: Position
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/cinemadetails/:id',
    component: CinemaDetails
  },
  {
    path: '/index',
    component: Index,
    children: [{
        path: 'movielist',
        component: MovieList,
        redirect: '/index/movielist/moving',
        children: [{
            path: 'moving',
            component: Moving
          },
          {
            path: 'coming',
            component: Coming
          }
        ]
      },
      {
        path: 'cinema',
        component: Cinema
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router