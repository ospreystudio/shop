<template>
<div class="v-main-wrapper">
<p> {{ title }} </p>
<catalog-item></catalog-item>
</div>
</template>

<script>
import CatalogItem from "./CatalogItem";
export default {
  name: "MainCatalog",
  components: {
    CatalogItem
  }
}
</script>

<style scoped>

</style>