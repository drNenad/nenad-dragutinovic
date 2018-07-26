<template>
  <section class="section-wrapper code" :style="[isMobile ? {height: codeWidth + '%'} : {width: codeWidth + '%'}]">
    <div class="section-toggle" v-if="!codeActive">
      <h1 v-if="!designActive">&lt;/code&gt;</h1>
      <button @click.prevent="TOGGLE_CODE" :class="{ button_rotate: designActive && !isMobile }">{{ !designActive ? 'Discover More' : 'Code' }}</button>
    </div>

    <div class="section-content" v-if="codeActive">
      Code CV - To be done...
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
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CodeSection',
  components: {
    LettersBackground
  },
  computed: {
    ...mapState({
      codeBackground: state => state.general.codeBackground,
      designActive: state => state.general.designActive,
      codeActive: state => state.general.codeActive
    }),
    ...mapGetters([
      'isMobile',
      'codeWidth'
    ])
  },
  methods: {
    ...mapMutations([
      'TOGGLE_CODE'
    ])
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

@media only screen and (max-width: 900px) {
  h1 {
    font-size: 40px;
    margin-bottom: 70px;
  }
  .section-wrapper {
    width: 100%;
    height: 50%;
  }
  button {
    padding: 8px;
  }
}
</style>
