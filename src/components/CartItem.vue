<template>
<div class="v-cart-item" >
  <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="" >
  <div class="v_cart-item__info">
    <p>{{ cart_item_data.name }}</p>
    <p>{{ cart_item_data.price }}</p>
    <p>{{ cart_item_data.article }}</p>
  </div>
  <div class="v-cart-item__quantity">
          <p>Qty</p>
       <span class="quantity__btn" @click="decrementItem"> - </span>
       <span >{{ cart_item_data.quantity }}</span>
       <span class="quantity__btn" @click="incrementItem"> + </span>
  </div>
  <button @click="deleteCart">Delete</button>
</div>

</template>


<script>

export default {
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.$set(this.cart_item_data,'quantity', 1)
  },
  methods: {

    deleteCart() {
      this.$emit('deleteCart')
    },
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    }
  },
  name: "CardItem.vue"
}
</script>

<style lang="scss" scoped>
.v-cart-item {
  display:flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  &__image {
    max-width:50px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px*2;
    margin-bottom: 8px*2;
  }
}
.quantity__btn {
  cursor: pointer;
}
</style>