<template>
  <div>
    <div class="card h-100">
        <div class="border products">
          <img :src="image" class="card-img-top" alt="lorem-image">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ description }}</p>
          
        </div>
        <div class="p-3">
          <h5 class="card-title">{{ product.price }}$</h5>
          <button class="btn btn-dark btn-sm mb-0" @click="$emit('viewProduct', product)">View</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: `https://cdn.dribbble.com/users/1187836/screenshots/5935226/3-cart.gif`
    }
  },
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
  },
  methods: {
    loading() {
      setTimeout(() => {
        return this.image = this.product.image
      }, 3000);
    }
  },
  mounted() {
    this.loading()
  }
}
</script>

<style>
.products {
  cursor: pointer;
}

.border {
  position: relative;
  overflow: hidden;
  max-width: 495px;
  max-height: 369px;
}

.border img {
  max-width: 100%;
  transition: all 1s;
}

.products:hover img {
  filter: brightness(70%);
  transform: scale(1.1);
}

</style>
