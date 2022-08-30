<template>
  <div>
    <div class="card">
        <div class="card-body p-4">
            <h5 class="card-title">Cart Total: {{ total }}$</h5>
            <a href="" class="btn btn-primary mt-2">Pay by Credit Cart</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.getters.cartTotalCost
    }
  }
}
</script>

<style></style>
