<template>
    <div>
      <ProductDescriptionDrawer
      v-if="product"
      :product="product"
      :active="active.productDrawer"
      @close-product-drawer="closeProductDrawer"
      />
      <h3 class="my-3">Products</h3>
      <div>
        <div class="row row-cols-1 row-cols-md-6 g-4">
          <ProductsSummaryCart
            :product="item"
            @view-product="viewProduct"
            class="col"
            v-for="item in products"
            :key="item.id"
          />
        </div>
      </div>
    </div>
</template>
  
<script>
import ProductsSummaryCart from './ProductsSummaryCart.vue';
import ProductDescriptionDrawer from './ProductDescriptionDrawer.vue';
export default {
  data() {
    return {
      product: null,
      active: {
        productDrawer: false
      }
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.productDrawer = true
      // console.log(this.product)
    },
    closeProductDrawer() {
      this.active.productDrawer = false
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    // console.log(this.products);
  },
  components: { ProductsSummaryCart, ProductDescriptionDrawer }
}
</script>
  
<style></style>
