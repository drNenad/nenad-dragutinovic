<template>
  <h1 v-bind:style="randomStyle">
    {{ item.letter }}
  </h1>
</template>

<script>
import getRandomStyle from '../helpers/getRandomStyle'

export default {
  name: 'Letters',
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    },
    type: {
      type: String
    }
  },
  data: function () {
    return {
      randomStyle: Object
    }
  },
  created () {
    this.randomStyle = getRandomStyle.getRandomStyle(this.item.positionStart, this.type)
  }
}
</script>

<style scoped>
.design-background{
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
