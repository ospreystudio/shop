<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Back to catalog</div>
    </router-link>
    <p v-if="!cart_data.length">There are no products in card...</p>
  <h1>Cart</h1>
  <cart-item v-for="(item, index) in cart_data"
              :key="item.article"
              :cart_item_data="item"
              @deleteCart="deleteCart(index)"></cart-item>
  </div>
</template>

<script>

import CartItem from "./CartItem";
import { mapActions } from 'vuex'
export default {
  props: {
    cart_data: {
        type: Array,
        default() {
          return []
        }
    }
  },
  components: {
    CartItem
  },
  name: "CatalogCard",

  methods: {
    ...mapActions([
        'delete'
    ]),
    deleteCart(index) {
        this.delete(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 8px*2;
  margin-bottom: 8px*2;
&__image {
   max-width: 50px;
 }
.quantity__btn {
  cursor: pointer;
}
.quantity__tools {
  user-select: none;
}
}
</style>