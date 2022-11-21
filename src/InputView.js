const MissionUtils = require('@woowacourse/mission-utils')
const { step } = require('./lib/constants')

/**
 * @typedef {Object} gameStatusCallback
 * @property {function(): number} getNextGameStatus
 * @property {function(number): void} setNextGameStatus
 */

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
    MOVEMENT: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
  },

  error: {
    BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    MOVEMENT: '[ERROR] 이동할 칸은 U 또는 D만 가능합니다.',
  },

  /**
   * @param {gameStatusCallback} gameStatusCallback
   */
  readBridgeSize({ getNextGameStatus, setNextGameStatus }) {
    MissionUtils.Console.readLine(`${this.query.BRIDGE_SIZE}\n`, (input) => {
      const size = Number(input)

      this.validateSize(size)

      const gameStatus = getNextGameStatus(size)
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
   * @param {gameStatusCallback} gameStatusCallback
   */
  readMoving({ getNextGameStatus, setNextGameStatus }) {
    MissionUtils.Console.readLine(`${this.query.MOVEMENT}\n`, (input) => {
      const movement = input.trim()

      this.validateMovement(movement)

      const gameStatus = getNextGameStatus(step[movement])
      setNextGameStatus(gameStatus)
    })
  },

  /**
   * @param {string} size
   */
  validateMovement(movement) {
    const movementKeys = Object.keys(step)
    const isInValid = !movementKeys.includes(movement)

    if (isInValid) {
      throw new Error(this.error.MOVEMENT)
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
}

module.exports = InputView
