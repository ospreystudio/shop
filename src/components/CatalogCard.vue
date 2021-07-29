<template>
<div>
  <img class="v-cart-item__image" src="" alt="">
</div>
</template>

<script>
export default {
  name: "CatalogCard"
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