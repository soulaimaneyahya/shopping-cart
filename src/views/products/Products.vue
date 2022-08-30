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
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <ProductItem
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
import ProductItem from './ProductItem.vue';
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
  components: { ProductItem, ProductDescriptionDrawer }
}
</script>
  
<style></style>
