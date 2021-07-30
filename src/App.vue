<template>
  <div id="app">
  <main-wrapper></main-wrapper>
  </div>
</template>

<script>

import MainWrapper from './components/MainWrapper.vue'
export default {
  name: 'App',
  components: {
    MainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  padding: 8px 16px;
  background: #26ae68;
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}


</style>
