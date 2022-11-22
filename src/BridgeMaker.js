const { NUMBER, STRING, ERROR } = require('./Contents')

const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    this.exceptionHandler(size)
    let numbers = []

    while (size > 0) {
      const number = generateRandomNumber()
      numbers.push(number)
      size--
    }

    const bridge = this.formatBridge(numbers)
    return bridge
  },

  exceptionHandler(size) {
    if (size < NUMBER.SIZE_MIN || size > NUMBER.SIZE_MAX) {
      throw new Error(ERROR.BRIDGE_RANGE)
    }
    if (isNaN(size)) {
      throw new Error(ERROR.BRIDGE_RANGE)
    }
    if (Number(size) % parseInt(size) !== 0) {
      throw new Error(ONLY_INTEGER)
    }
  },

  formatBridge(numbers) {
    let bridge = numbers.map((number) => {
      if (number) {
        return STRING.TOP_BRIDGE
      }
      if (!number) {
        return STRING.BOTTOM_BRIDGE
      }
    })

    return bridge
  },
}

module.exports = BridgeMaker
