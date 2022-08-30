<template>
  <div>
    <div class="card h-100">
        <img :src="product.image" class="card-img-top" alt="lorem-image">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ description }}</p>
          <h5 class="card-title">{{ product.price }}$</h5>
          <button class="btn btn-dark btn-sm" @click="$emit('viewProduct', product)">View</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product: {
      type: Object,
      required:true
    }
  },
  computed: {
    description() {
      return `${this.product.description.substring(0, 50)}..`
    }
  }
}
</script>

<style></style>
