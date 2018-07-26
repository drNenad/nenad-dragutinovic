<template>
  <div class="home-wrapper">
    <Header
      :designActive="designActive"
      :resetSections="resetSections"
      :isMobile="isMobile"
    />

    <DesignSection
      :designWidth="designWidth"
      :toggleDesign="toggleDesign"
      :designActive="designActive"
      :codeActive="codeActive"
      :isMobile="isMobile"
    />

    <CodeSection
      :developWidth="developWidth"
      :toggleDevelop="toggleDevelop"
      :designActive="designActive"
      :codeActive="codeActive"
      :isMobile="isMobile"
    />
      
    <img src="./assets/personal-image.png" v-if="!isMobile" class="personal-image" v-bind:class="{ fadeout: designActive || codeActive }"/>
  </div>
</template>

<script>
import Header from './components/Header'
import CodeSection from './sections/code/_main'
import DesignSection from './sections/design/_main'

export default {
  name: 'HomeWrapper',
  components: {
    Header,
    CodeSection,
    DesignSection
  },
  data: function () {
    return {
      designActive: false,
      codeActive: false,
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isMobile: function () {
      return this.windowWidth <= 900
    },
    designWidth: function () {
      return this.designActive ? 93
            : this.codeActive ? 7
            : this.isMobile ? 100
            : 50
    },
    developWidth: function () {
      return this.codeActive ? 93
            : this.designActive ? 7
            : this.isMobile ? 100
            : 50
    }
  },
  methods: {
    toggleDesign: function () {
      this.designActive = true
      this.codeActive = false
    },
    toggleDevelop: function () {
      this.designActive = false
      this.codeActive = true
    },
    resetSections: function () {
      this.designActive = false
      this.codeActive = false
    }
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  watch: {
    windowWidth() {
      this.windowWidth = window.innerWidth
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
