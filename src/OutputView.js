const MissionUtils = require('@woowacourse/mission-utils');
const Message = require('../src/MessageContent')

const OutputView = {
  pirntGameStart() {
    MissionUtils.Console.print(Message.GAME_START)
  },

  printMap(map) {
    MissionUtils.Console.print(`[ ${ map[0].join(" | ") } ]`)
    MissionUtils.Console.print(`[ ${ map[1].join(" | ") } ]\n`)
  },

  printResult(result) {
    MissionUtils.Console.print(`${Message.END_GAME}`)
    MissionUtils.Console.print(`[ ${result.bridgeMap[0].join(" | ") } ]`)
    MissionUtils.Console.print(`[ ${result.bridgeMap[1].join(" | ") } ]`)
    MissionUtils.Console.print(`${result.gameOver}`)
    MissionUtils.Console.print(`${result.moveCount}`)
    MissionUtils.Console.close()
  },

  linkBreak() {
    MissionUtils.Console.print('\r')
  }
};

module.exports = OutputView;
