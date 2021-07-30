<template>
  <div class="v-main wrapper">
  <p> {{ title }}</p>
    <main-catalog></main-catalog>
    <catalog-cart v-if="cart.length"
                  :cart_data="cart"></catalog-cart>
  </div>
</template>

<script>

import MainCatalog from "./MainCatalog";
import CatalogCart from "./CatalogCart";
import {mapGetters} from 'vuex'
export default {
  name: "v-main-wrapper.vue",
  components: {
    MainCatalog,
    CatalogCart
  },
  data() {
    return {
      title: "Main Wrapper"
    }
  },
  computed:{
    ...mapGetters([
        'cart'
    ])
  },
  methods: {
  },
  watch: {},
  mounted() {
    console.log('Hello im alive')
  }
}
</script>

<style scoped>

.v-main-wrapper {

  max-width: 900px;
  margin: 0 auto;

}
</style>