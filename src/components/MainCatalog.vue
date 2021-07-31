<template>
<div class='v-catalog'>
  <router-link :to="{name: 'cart', params: {cart_data: cart}}">
    <div class="v-catalog__link_to_cart">Cart: {{ cart.length }}</div>
  </router-link>

  <h1>Catalog</h1>
<div class='v-catalog__list'>
<catalog-item v-for="product in products"
                :key="product.article"
                  :product_data="product"
                @addToCart="addToCart"
                  ></catalog-item>
</div>
</div>
</template>

<script>
import CatalogItem from "./CatalogItem";
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "MainCatalog",
  components: {
    CatalogItem
  },
  computed: {
    ...mapGetters(['products', 'cart']),
  },
  methods: {
    ...mapActions(['getProduct', 'addCart']),

    addToCart(data) {
      this.addCart(data)
    }
  },
  mounted() {
    this.getProduct()
    .then()
  }
}

</script>

<style lang="scss" scoped>
.v-catalog {
&__list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
 }
&__link_to_cart {
   position: fixed;
   top: 20px;
   right: 40px;
   padding: 18px*2;
   border: solid 1px #aeaeae;
   background: #ffffff;
 }
}

</style>
