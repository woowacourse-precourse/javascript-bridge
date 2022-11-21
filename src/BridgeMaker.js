
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
    if (size < 3 || size > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.')
    }
    if (isNaN(size)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.')
    }
  },

  formatBridge(numbers) {
    let bridge = numbers.map((number) => {
      if (number) {
        return 'U'
      }
      if (!number) {
        return 'D'
      }
    })

    return bridge
  },
}

module.exports = BridgeMaker
