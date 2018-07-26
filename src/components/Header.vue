<template>
  <header>
    <nav>
      <a href="#" @click.prevent="RESET_SECTION">
        <img src="../assets/logo.png"/>
      </a>

      <ul :class="{ test: designActive && !isMobile }">
        <li class="facebook">
          <a href="#">
            F
          </a>
        </li>
        <li class="linkedin">
          <a href="#">
            L
          </a>
        </li>
        <li class="instagram">
          <a href="#">
            I
          </a>
        </li>
        <li class="menu">
          <a href="#">
            Menu
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
    }),
    ...mapGetters([
      'isMobile'
    ])
  },
  methods: {
    ...mapMutations([
      'RESET_SECTION'
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
li {

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
  color: #fff;
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
  transform: translate3d(110px, 120px, 0);
}
.test .linkedin {
  transform: translate3d(80px, 80px, 0);
}
.test .instagram {
  transform: translate3d(40px, 40px, 0);
}
</style>
