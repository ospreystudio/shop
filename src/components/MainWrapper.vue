<template>
  <div class="v-main wrapper">
  <p> {{ title }}</p>
    <main-catalog></main-catalog>
    <catalog-card></catalog-card>
  </div>
</template>

<script>

import MainCatalog from "./MainCatalog";
import CatalogCard from "./CatalogCard";
export default {
  name: "v-main-wrapper.vue",
  components: {
    MainCatalog,
    CatalogCard
  },
  data() {
    return {
      title: "Main Wrapper"
    }
  },
  computed:{
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