<template>
  <div class="home-wrapper">
    <Header/>

    <DesignSection/>

    <CodeSection/>
      
    <img src="../assets/personal-image.png" v-if="!isMobile" class="personal-image" v-bind:class="{ fadeout: designActive || codeActive }"/>
  </div>
</template>

<script>
import Header from '../components/Header'
import CodeSection from './code/_main'
import DesignSection from './design/_main'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HomeWrapper',
  components: {
    Header,
    CodeSection,
    DesignSection
  },
  computed: {
    ...mapState({
      designActive: state => state.general.designActive,
      codeActive: state => state.general.codeActive,
      windowWidth: state => state.general.windowWidth
    }),
    ...mapGetters([
      'isMobile'
    ])
  },
  methods: {
    ...mapMutations([
      'GET_WINDOW_WIDTH'
    ])
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.GET_WINDOW_WIDTH()
      })
    })
  },
  watch: {
    windowWidth() {
      this.GET_WINDOW_WIDTH()
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.home-wrapper {
  width: 100vw;
  height: 100vh;
  display: inline-flex;
}
.section-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 5;
}
.personal-image {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 1;
  visibility: visible;
  z-index: 6;
  -webkit-transition: all 0.3s ease-in-out 0.2s;
  -moz-transition: all 0.3s ease-in-out 0.2s;
  -ms-transition: all 0.3s ease-in-out 0.2s;
  -o-transition: all 0.3s ease-in-out 0.2s;
  transition: all 0.3s ease-in-out 0.2s;
}
.fadeout {
    opacity: 0;
    visibility: hidden;
    -webkit-transition-duration: 0.1s;
    -moz-transition-duration: 0.1s;
    -ms-transition-duration: 0.1s;
    -o-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    -ms-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
    transition-delay: 0s;
}

@media only screen and (max-width: 900px) {
    .home-wrapper {
        flex-direction: column;
    }
    .section-wrapper {
        width: 100%;
        height: 50%;
    }
}
</style>
