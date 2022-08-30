<template>
  <div>
    <h3 class="my-3">Your Cart</h3>
    <div class="row">
      <div class="col-md-8">
        <CartItem v-for="(item, index) in cart" :key="index" :cart="item" />
      </div>
      <div class="col-md-4">
        <CartPay />
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
