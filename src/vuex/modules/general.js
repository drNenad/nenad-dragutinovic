export default {
  state: {
    windowWidth: window.innerWidth,
    designActive: false,
    codeActive: false,
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
    ],
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
    ],
  },
  getters: {
    isMobile: state => {
      return state.windowWidth <= 900
    },
    designWidth: state => {
      return state.designActive ? 93
          : state.codeActive ? 7
          : state.isMobile ? 100
          : 50
    },
    codeWidth: state => {
      return state.codeActive ? 93
          : state.designActive ? 7
          : state.isMobile ? 100
          : 50
    },
    showMobileDesignButton: (state, getters) => {
      return state.codeActive && getters.isMobile
    }
  },
  mutations: {
    TOGGLE_DESIGN (state) {
      state.designActive = true
      state.codeActive = false
    },
    TOGGLE_CODE (state) {
      state.designActive = false
      state.codeActive = true
    },
    RESET_SECTION (state) {
      state.designActive = false
      state.codeActive = false
    },
    GET_WINDOW_WIDTH (state) {
      state.windowWidth = window.innerWidth
    }
  }
}