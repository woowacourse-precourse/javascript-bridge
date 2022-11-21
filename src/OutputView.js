const MissionUtils = require('@woowacourse/mission-utils')
const { step } = require('./lib/constants')

const OutputView = {
  map: {
    PREFIX: '[',
    SEPARATOR: '|',
    SUFFIX: ']',
    RIGHT: 'O',
    WRONG: 'X',
    DEFAULT: ' ',
  },

  result: {
    LAST: '최종 게임 결과',
    SUCCESS: '게임 성공 여부',
    TRIAL: '총 시도한 횟수',
  },

  gameStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.')
  },

  /**
   * @param {string[]} bridge
   * @param {string[]} moves
   * @param {boolean=} last - 게임 최종 여부
   * @returns {boolean} success - 게임 성공 / 실패 여부
   */
  printMap(bridge, moves, last = false) {
    const [upside, downside] = this.drawMap(bridge, moves)

    if (last) MissionUtils.Console.print(this.result.LAST)
    MissionUtils.Console.print(this.formatSide(upside))
    MissionUtils.Console.print(this.formatSide(downside))

    return (
      upside.every((result) => result !== this.map.WRONG) &&
      downside.every((result) => result !== this.map.WRONG)
    )
  },

  /**
   * @param {string[]} bridge
   * @param {string[]} moves
   * @returns {string[][]}
   */
  drawMap(bridge, moves) {
    const [upside, downside] = this.initializeMap(moves.length)

    moves.forEach((move, index) => {
      const side = move === step[0] ? downside : upside

      side[index] = move === bridge[index] ? this.map.RIGHT : this.map.WRONG
    })

    return [upside, downside]
  },

  /**
   * @param {number} length
   * @returns {string[][]}
   */
  initializeMap(length) {
    const side = new Array(length).fill(this.map.DEFAULT)

    return [[...side], [...side]]
  },

  /**
   * @param {number[]} side
   * @returns {string}
   */
  formatSide(side) {
    return `${this.map.PREFIX} ${side.join(` ${this.map.SEPARATOR} `)} ${
      this.map.SUFFIX
    }`
  },

  /**
   * @param {boolean} success
   * @param {number} trial
   */
  printResult(success, trial) {
    MissionUtils.Console.print(
      `\n${this.result.SUCCESS}: ${success ? '성공' : '실패'}`
    )
    MissionUtils.Console.print(`${this.result.TRIAL}: ${trial}`)
  },
}

module.exports = OutputView
