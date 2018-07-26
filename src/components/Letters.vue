<template>
  <h1 v-bind:style="randomStyle">
    {{ item.letter }}
  </h1>
</template>

<script>
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
      randomStyle: {
        color: String,
        fontSize: String,
        top: String,
        right: String
      }
    }
  },
  methods: {
    getRandomInt: function (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    getRandomFontSize: function () {
      let num = this.getRandomInt(50, 200)

      this.randomStyle.fontSize = num + 'px'
    },
    getRandomPosition: function (sectionIndex) {
      let top = this.getRandomInt(sectionIndex, sectionIndex + 15)
      let right = this.getRandomInt(0, 80)

      this.randomStyle.top = top + '%'
      this.randomStyle.right = right + '%'
    },
    getRandomOpacity: function () {
      let opacity = this.getRandomInt(4,10)

      this.randomStyle.opacity = opacity / 10
    },
    getFontColor: function () {
      let color = this.type === 'design' ? '#ebebeb' : '#272319'

      this.randomStyle.color = color
    },
    getRandomStyle: function () {
      this.getRandomFontSize()
      this.getRandomPosition(this.item.positionStart)
      this.getRandomOpacity()
      this.getFontColor()
    }
  },
  created () {
    this.getRandomStyle()
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
