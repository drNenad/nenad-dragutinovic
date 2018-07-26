<template>
  <div class="letters-background">
    <div v-for="(item, key) in backgroundData" v-bind:key="key">
      <Letters
        :item="item"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
import Letters from './Letters'

export default {
  name: 'LettersBackground',
  components: {
    Letters
  },
  props: {
    backgroundData: {
      type: Array
    },
    type: {
      type: String
    }
  }
}
</script>

<style scoped>
.letters-background{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  user-select: none;
}
h1 {
  margin: 0px;
  position: absolute;
}
</style>
