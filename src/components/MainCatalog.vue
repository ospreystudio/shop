<template>
<div class='v-catalog'>
  <h1>Catalog</h1>
<div class='v-catalog__list'>
<catalog-item v-for="product in products"
                :key="product.article"
                  :product_data="product"
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
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['getProduct']),
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
   top: 80px;
   right: 10px;
   padding: 18px*2;
   border: solid 1px #aeaeae;
   background: #ffffff;
 }
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>