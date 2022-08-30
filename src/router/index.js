import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/products/Products.vue'
import Cart from '../views/cart/Cart.vue'
import notFound from '../views/errors/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    // catch all 404
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: notFound
    }
  ]
})

export default router
