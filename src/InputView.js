const MissionUtils = require('@woowacourse/mission-utils')
const { step, option } = require('./lib/constants')

/**
 * @typedef {Object} gameStatusCallback
 * @property {function(): number} getNextGameStatus
 * @property {function(number): void} setNextGameStatus
 */

const InputView = {
  bridgeLength: {
    MIN: 3,
    MAX: 20,
  },

  query: {
    BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
    MOVEMENT: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
  },

  error: {
    BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    MOVEMENT: '[ERROR] 이동할 칸은 U 또는 D만 가능합니다.',
    COMMAND: '[ERROR] 게임 옵션은 R 또는 Q만 가능합니다.',
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
   * @param {string} movement
   */
  validateMovement(movement) {
    const movementKeys = Object.keys(step)
    const isInValid = !movementKeys.includes(movement)

    if (isInValid) {
      throw new Error(this.error.MOVEMENT)
    }
  },

  /**
   * @param {gameStatusCallback} gameStatusCallback
   */
  readGameCommand({ getNextGameStatus, setNextGameStatus }) {
    MissionUtils.Console.readLine(`${this.query.COMMAND}\n`, (input) => {
      const command = input.trim()

      this.validateCommand(command)

      const gameStatus = getNextGameStatus(option[command])
      setNextGameStatus(gameStatus)
    })
  },

  /**
   * @param {string} command
   */
  validateCommand(command) {
    const optionKeys = Object.keys(option)
    const isInValid = !optionKeys.includes(command)

    if (isInValid) {
      throw new Error(this.error.COMMAND)
    }
  },
}

module.exports = InputView
