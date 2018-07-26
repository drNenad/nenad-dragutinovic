<template>
  <header>
    <nav>
      <a href="#" @click.prevent="RESET_SECTION">
        <img src="../assets/logo.png"/>
      </a>

      <button @click.prevent="TOGGLE_DESIGN" v-bind:class="{ showbutton : showMobileDesignButton }">Design</button>

      <ul :class="{ test: designActive && !isMobile }">
        <li class="facebook">
          <a href="https://www.facebook.com/nenad.dragutinovic.12" target="_blank">
             <img src="../assets/facebook.svg"/>
          </a>
        </li>
        <li class="linkedin">
          <a href="https://www.linkedin.com/in/nenad-dragutinovic/" target="_blank">
            <img src="../assets/linkedin.svg"/>
          </a>
        </li>
        <li class="instagram">
          <a href="https://www.instagram.com/dr_nenaad/" target="_blank">
            <img src="../assets/instagram.svg"/>
          </a>
        </li>
        <li class="menu">
          <a href="#">
            <img src="../assets/menu.svg"/>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState({
      designActive: state => state.general.designActive,
      codeActive: state => state.general.codeActive,
    }),
    ...mapGetters([
      'isMobile',
      'showMobileDesignButton'
    ])
  },
  methods: {
    ...mapMutations([
      'RESET_SECTION',
      'TOGGLE_DESIGN'
    ])
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
nav {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}
img {
  width: 60px;
}
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}
a {
  margin: 0px;
  padding: 10px;
  color: #b6b8b8;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
a:hover {
  opacity: 0.8;
}
nav ul a img {
  width: 20px;
}
button {
  height: 100%;
  padding: 20px;
  background: none;
  border: 3px solid #2c3e50;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  z-index: 30;
  text-transform: uppercase;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30vh);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
button:hover {
  background: #2c3e50;
  color: #fff;
}
.showbutton {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
.facebook {
  -webkit-transition: all 0.1s ease-in-out 0.2s;
  -moz-transition: all 0.1s ease-in-out 0.2s;
  -ms-transition: all 0.1s ease-in-out 0.2s;
  -o-transition: all 0.1s ease-in-out 0.2s;
  transition: all 0.1s ease-in-out 0.2s;
}
.linkedin {
  -webkit-transition: all 0.1s ease-in-out 0.1s;
  -moz-transition: all 0.1s ease-in-out 0.1s;
  -ms-transition: all 0.1s ease-in-out 0.1s;
  -o-transition: all 0.1s ease-in-out 0.1s;
  transition: all 0.1s ease-in-out 0.1s;
}
.instagram {
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
.test .facebook {
  transform: translate3d(120px, 120px, 0);
}
.test .linkedin {
  transform: translate3d(80px, 80px, 0);
}
.test .instagram {
  transform: translate3d(40px, 40px, 0);
}
@media only screen and (max-width: 900px) {
  nav {
    margin: 0px !important;
  }
  .facebook, .instagram, .linkedin {
    display: none;
  }
  button {
    padding: 8px;
    margin-top: 3px;
  }
  a {
    color: #2c3e50;
  }
  a:hover {
    color: #4e728f;
  }
}
</style>
