<template>
  <div>
    <div class="card mb-3">
        <h5 class="card-header">{{ cart.name }}</h5>
        <div class="card-body">
            <p class="card-text">{{ description }}</p>
        </div>
        <div class="px-3 py-2 justify-content-between d-flex">
            <h6 class="card-title">in Cart: {{ cart.quantity }}</h6>
            <h6 class="card-title">Total Cost: {{ totaCost }}$</h6>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        cart: {
            type: Object,
            required: true
        }
    },
    computed: {
        totaCost() {
            return (this.cart.price * this.cart.quantity).toFixed(2)
        },
        description() {
            return `${this.cart.description.substring(0, 80)}..`
        }
    }
}
</script>

<style></style>
