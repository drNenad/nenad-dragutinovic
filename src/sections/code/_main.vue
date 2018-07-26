<template>
  <section class="section-wrapper code" :style="[isMobile ? {height: developWidth + '%'} : {width: developWidth + '%'}]">
    <div class="section-toggle" v-if="!codeActive">
      <h1 v-if="!designActive">&lt;/code&gt;</h1>
      <button @click.prevent="toggleDevelop" :class="{ button_rotate: designActive && !isMobile }">{{ !designActive ? 'Discover More' : 'Code' }}</button>
    </div>

    <div class="section-content" v-if="codeActive">
      Code CV
    </div>

    <LettersBackground
      :backgroundData="codeBackground"
      :type="'code'"
      v-if="!designActive"
    />
  </section>
</template>

<script>
import LettersBackground from '../../components/LettersBackground'

export default {
  name: 'CodeSection',
  components: {
    LettersBackground
  },
  props: {
    developWidth: {
      type: Number,
      required: true
    },
    toggleDevelop: {
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
      codeBackground: [
        {
          letter: 'c',
          positionStart: 0
        },
        {
          letter: 'o',
          positionStart: 20
        },
        {
          letter: 'd',
          positionStart: 40
        },
        {
          letter: 'e',
          positionStart: 60
        }
      ]
    }
  }
}
</script>

<style scoped>
.code {
  background-color: #151515;
}
h1 {
  color: #b99458;
  margin-top: 0px;
  margin-bottom: 150px;
  font-size: 100px;
}
button {
  padding: 20px;
  background: none;
  color: #b99458;
  border: 3px solid #b99458;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background: #b99458;
  color: #2c3e50;
}

.button_rotate {
  transform: rotate(90deg);
}
</style>
