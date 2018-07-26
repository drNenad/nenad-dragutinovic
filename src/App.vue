<template>
  <div id="app">
    <HomeWrapper/>
  </div>
</template>

<script>
import HomeWrapper from './sections/HomeWrapper.vue'

export default {
  name: 'app',
  components: {
    HomeWrapper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
  overflow: hidden;
}
img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
::selection {
  background: #b99458; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #b99458; /* Gecko Browsers */
}
</style>
