const MissionUtils = require('@woowacourse/mission-utils');
const Message = require('../src/MessageContent')

const OutputView = {
  printMap(map) {
    MissionUtils.Console.print(`[ ${map[0].join(' | ')} ]\n[ ${map[1].join(' | ')} ]`)
  },

  printResult(result) {
    MissionUtils.Console.print(Message.END_GAME)
    MissionUtils.Console.print(`[ ${result.bridgeMap[0].join(' | ')} ]\n[ ${result.bridgeMap[1].join(' | ')} ]\n`)
    MissionUtils.Console.print(`${result.gameOver}`)
    MissionUtils.Console.print(`${result.moveCount}`)
    MissionUtils.Console.close()
  },
};

module.exports = OutputView;
