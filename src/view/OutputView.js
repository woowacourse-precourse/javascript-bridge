const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constants');

const controller = require('../controller/BridgeController');

const OutputView = {
  makeMiniTemplate(outputList) {
    return `[ ${outputList.join(' | ')} ]`;
  },

  moveMapTemplate(outputMap) {
    return [
      OutputView.makeMiniTemplate(outputMap[0]),
      OutputView.makeMiniTemplate(outputMap[1])
    ];
  },

  finalResultTemplate(outputExit) {
    return [
      '',
      `게임 성공 여부: ${outputExit.result}`,
      `총 시도한 횟수: ${outputExit.tryCount}`
    ];
  },

  printMap() {
    this.moveMapTemplate(controller.outputmoveMap()).forEach((bridge) =>
      Console.print(bridge)
    );
    Console.print('');
  },

  printResult() {
    Console.print(GAME_MESSAGE.final);
    OutputView.printMap();
    OutputView.finalResultTemplate(
      controller.outputExit()
    ).forEach((sentence) => Console.print(sentence));

    Console.close();
  }
};

module.exports = OutputView;
