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
              @deleteCart="deleteCart(index)"
              @increment="increment(index)"
              @decrement="decrement(index)">

  </cart-item>
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost  }} P</p>
    </div>
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

  computed: {
    cartTotalCost() {
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    }
  },

  methods: {
    ...mapActions([
        'delete','incrementCart', 'decrementCart'
    ]),
    increment(index) {
      this.incrementCart(index)
    },
    decrement(index) {
      this.decrementCart(index)
    },
    deleteCart(index) {
        this.delete(index)
    }
  }
}
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 8*2 8*3;
    display: flex;
    justify-content: center;
    background: #26ae68;
    color: #ffffff;
    font-size: 20px;
  }
  .total__name {
    margin-right: 8*2;
  }
}
</style>