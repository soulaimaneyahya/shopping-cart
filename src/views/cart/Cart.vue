<template>
  <div>
    <h3 class="my-3">Your Cart</h3>
    <div class="row" v-if="cart.length">
      <div class="col-md-8">
        <CartItem v-for="(item, index) in cart" :key="index" :cart="item" />
      </div>
      <div class="col-md-4">
        <CartPay />
      </div>
    </div>
    <div v-else>
      <div class="d-flex align-items-center justify-content-start">
          <h1 class="display-1 fw-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </h1>
          <div class="mx-3 mt-2">
            <h4>Empty Cart</h4>
            <a href="/" class="my-0 btn btn-dark btn-sm">Back Home</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
import CartPay from './CartPay.vue';
export default {
  components: { CartItem, CartPay },
  computed: {
    cart() {
      return this.$store.getters.cartItems
    }
  }
}
</script>

<style></style>
