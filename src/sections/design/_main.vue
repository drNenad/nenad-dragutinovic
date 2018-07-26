<template>
  <section class="section-wrapper design" :style="[isMobile ? {height: designWidth + '%'} : {width: designWidth + '%'}]">
    <div class="section-toggle" v-if="!designActive">
      <h1 v-if="!codeActive">Design</h1>
      <button @click.prevent="TOGGLE_DESIGN" :class="{ button_rotate: codeActive && !isMobile }">{{ !codeActive ? 'Discover More' : 'Design' }}</button>
    </div>

    <div class="section-content" v-if="designActive">
      Design CV - To be done...
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
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'DesignSection',
  components: {
    LettersBackground
  },
  computed: {
    ...mapState({
      designBackground: state => state.general.designBackground,
      designActive: state => state.general.designActive,
      codeActive: state => state.general.codeActive
    }),
    ...mapGetters([
      'isMobile',
      'designWidth'
    ])
  },
  methods: {
    ...mapMutations([
      'TOGGLE_DESIGN'
    ])
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
