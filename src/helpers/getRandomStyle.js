const randomStyle = (function () {
    return {
      getRandomStyle: getRandomStyle
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    function getRandomFontSize() {
        let num = getRandomInt(50, 200)

        return num + 'px'
    }

    function getRandomTopPosition(index) {
        let top = getRandomInt(index, index + 15)

        return top + '%'
    }

    function getRandomRightPosition() {
        let right = getRandomInt(0, 80)

        return right + '%'
    }

    function getRandomOpacity() {
        let opacity = getRandomInt(4,10)

        return opacity / 10
    }

    function getFontColor(type) {
        let color = type === 'design' ? '#ebebeb' : '#272319'

        return color
    }

    function getRandomStyle (index, type) {
        let randomStyle = {
          color: getFontColor(type),
          fontSize: getRandomFontSize(),
          top: getRandomTopPosition(index),
          right: getRandomRightPosition(),
          opacity: getRandomOpacity()
        }

        return randomStyle
    }
}())

export default randomStyle