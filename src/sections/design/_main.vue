<template>
  <section class="section-wrapper design" :style="[isMobile ? {height: designWidth + '%'} : {width: designWidth + '%'}]">
    <div class="section-toggle" v-if="!designActive">
      <h1 v-if="!codeActive">Design</h1>
      <button @click.prevent="toggleDesign" :class="{ button_rotate: codeActive && !isMobile }">{{ !codeActive ? 'Discover More' : 'Design' }}</button>
    </div>

    <div class="section-content" v-if="designActive">
      Design CV
    </div>

    <LettersBackground
      :backgroundData="designBackground"
      :type="'design'"
      v-if="!codeActive"
    />
  </section>
</template>

<script>
import LettersBackground from '../../components/LettersBackground'

export default {
  name: 'DesignSection',
  components: {
    LettersBackground
  },
  props: {
    designWidth: {
      type: Number,
      required: true
    },
    toggleDesign: {
      type: Function,
      required: true
    },
    designActive: {
      type: Boolean,
      required: true
    },
    codeActive: {
      type: Boolean,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data: function () {
    return {
      designBackground: [
        {
          letter: 'd',
          positionStart: 0
        },
        {
          letter: 'e',
          positionStart: 13
        },
        {
          letter: 's',
          positionStart: 26
        },
        {
          letter: 'i',
          positionStart: 39
        },
        {
          letter: 'g',
          positionStart: 52
        },
        {
          letter: 'n',
          positionStart: 65
        },
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 0px;
  margin-bottom: 150px;
  font-size: 100px;
}
button {
  padding: 20px;
  background: none;
  border: 3px solid #2c3e50;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  z-index: 30;
  text-transform: uppercase;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background: #2c3e50;
  color: #fff;
}

.button_rotate {
  transform: rotate(-90deg);
}
</style>
