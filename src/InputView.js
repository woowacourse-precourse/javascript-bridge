const MissionUtils = require('@woowacourse/mission-utils')
const { step, option } = require('./lib/constants')

/**
 * @typedef {Object} gameStatusCallback
 * @property {function(): number} getNextGameStatus
 * @property {function(number=): void} setNextGameStatus
 */

/**
 * @typedef {Object} error
 * @property {string} message
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
    BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 정수여야 합니다.',
    MOVEMENT: '[ERROR] 이동할 칸은 U 또는 D만 가능합니다.',
    COMMAND: '[ERROR] 게임 옵션은 R 또는 Q만 가능합니다.',
  },

  /**
   * @param {gameStatusCallback} gameStatusCallback
   */
  readBridgeSize({ getNextGameStatus, setNextGameStatus }) {
    MissionUtils.Console.readLine(`\n${this.query.BRIDGE_SIZE}\n`, (input) => {
      try {
        const size = Number(input)
        this.validateSize(size)

        this.handleGameStatus({ getNextGameStatus, setNextGameStatus }, size)
      } catch (error) {
        this.handleError(error, setNextGameStatus)
      }
    })
  },

  /**
   * @param {number} size
   */
  validateSize(size) {
    const isInValid =
      isNaN(size) ||
      !Number.isInteger(size) ||
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
    MissionUtils.Console.readLine(`\n${this.query.MOVEMENT}\n`, (input) => {
      try {
        const move = input.trim()
        this.validateMove(move)

        this.handleGameStatus({ getNextGameStatus, setNextGameStatus }, move)
      } catch (error) {
        this.handleError(error, setNextGameStatus)
      }
    })
  },

  /**
   * @param {string} move
   */
  validateMove(move) {
    const moveValues = Object.values(step)
    const isInValid = !moveValues.includes(move)

    if (isInValid) {
      throw new Error(this.error.MOVEMENT)
    }
  },

  /**
   * @param {gameStatusCallback} gameStatusCallback
   */
  readGameCommand({ getNextGameStatus, setNextGameStatus }) {
    MissionUtils.Console.readLine(`\n${this.query.COMMAND}\n`, (input) => {
      try {
        const command = input.trim()
        this.validateCommand(command)

        this.handleGameStatus(
          { getNextGameStatus, setNextGameStatus },
          option[command]
        )
      } catch (error) {
        this.handleError(error, setNextGameStatus)
      }
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

  /**
   * @param {gameStatusCallback} gameStatusCallback
   * @param {number | string} size
   */
  handleGameStatus({ getNextGameStatus, setNextGameStatus }, input) {
    const gameStatus = getNextGameStatus(input)

    setNextGameStatus(gameStatus)
  },

  /**
   * @param {error} error
   * @param {function(number=): void} setNextGameStatus
   */
  handleError(error, setNextGameStatus) {
    MissionUtils.Console.print(error.message)

    setNextGameStatus()
  },
}

module.exports = InputView
