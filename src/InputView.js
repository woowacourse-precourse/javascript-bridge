const MissionUtils = require('@woowacourse/mission-utils')

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridgeLength: {
    MIN: 3,
    MAX: 20,
  },

  query: {
    BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
  },

  error: {
    BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  },

  /**
   * @param {function(): number} getNextGameStatus
   * @param {function(number): void} setNextGameStatus
   */
  readBridgeSize(getNextGameStatus, setNextGameStatus) {
    MissionUtils.Console.readLine(`${this.query.BRIDGE_SIZE}\n`, (size) => {
      const numberedSize = Number(size)

      this.validateSize(numberedSize)

      const gameStatus = getNextGameStatus(numberedSize)
      setNextGameStatus(gameStatus)
    })
  },

  /**
   * @param {number} size
   */
  validateSize(size) {
    const isInValid =
      isNaN(size) ||
      size < this.bridgeLength.MIN ||
      this.bridgeLength.MAX < size

    if (isInValid) {
      throw new Error(this.error.BRIDGE_SIZE)
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
}

InputView.readBridgeSize(
  () => {
    return 1
  },
  (number) => {}
)

module.exports = InputView
