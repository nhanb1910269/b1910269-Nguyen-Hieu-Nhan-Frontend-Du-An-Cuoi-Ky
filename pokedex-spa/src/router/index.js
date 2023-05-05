import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchPokemon from '../views/SearchPokemon.vue'
import ShowAllPokemon from '../views/ShowAllPokemon.vue'
import ViewPokemon from '../views/Yourteam/View.vue'
import CreatePokemon from '../views/Yourteam/Create.vue'
import EditPokemon from '../views/Yourteam/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/searchpokemon',
      name: 'searchpokemon',
      component: SearchPokemon
    },
    {
      path: '/showallpokemon',
      name: 'showallpokemon',
      component: ShowAllPokemon
    },
    {
      path: '/yourteam',
      name: 'yourteam',
      component: ViewPokemon
    },
    {
      path: '/yourteam/create',
      name: 'createpokemon',
      component: CreatePokemon
    },
    {
      path: '/yourteam/:id/edit',
      name: 'editpokemon',
      component: EditPokemon
    },
    
  ]
})

export default router
