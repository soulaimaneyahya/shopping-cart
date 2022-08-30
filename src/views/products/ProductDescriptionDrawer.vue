<template>
<div>
    <div class="drawer-background" :class="{show: active}" @click="$emit('closeProductDrawer')"></div>
    <div class="drawer" :class="{show: active}">
        <div class="d-flex justify-content-end">
            <button class="drawer-close btn btn-sm btn-dark" @click="$emit('closeProductDrawer')">x</button>
        </div>
        <div v-if="product" class="product-details text-center my-3">
            <h4>{{ product.name }}</h4>
            <p class="description">{{ product.description }}</p>
            <h4>${{ product.price }}</h4>
        </div>
        <div class="cart-total my-3 text-center" v-if="productTotal">
            <h5 class="py-0 my-0">In Cart: {{ productTotal }}</h5>
        </div>
        <div class="button-container text-center">
            <button class="btn btn-danger btn-sm remove me-2" @click="productRemoved">Remove</button>
            <button class="btn btn-dark btn-sm add" @click="productAdded">Add</button>
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
        },
        active: Boolean
    },
    computed: {
        productTotal() {
            return this.$store.getters.productQuantity(this.product)
        }
    },
    methods: {
        productAdded() {
            this.$store.commit('addToCart', this.product)
        },
        productRemoved() {
            this.$store.commit('removeFromCart', this.product)
        }
    }
}
</script>

<style>
    .drawer-background {
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgb(51, 51, 51);
        opacity: 0.6;
        z-index: 10;
        display: none;
    }
    .drawer {
        width: 25vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        padding: 15px;
        opacity: 1;
        display: none;
        z-index: 11;
        overflow-y: scroll;
        animation: cananimation .3s ease-in-out;
    }
    .show {
        display: block;
    }
    
    @keyframes cananimation {
        from {transform: translateX(-100%);}
        to {transform: translateX(0);}
    }

    @media (max-width: 700px){
	    .drawer { width: 50vw; }
    }

    @media (max-width: 500px){
	    .drawer { width: 100vw; }
    }
</style>
