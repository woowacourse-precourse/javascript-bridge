const { Console } = require('@woowacourse/mission-utils');

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

  printMap(controlInstance) {
    this.moveMapTemplate(controlInstance.outputmoveMap()).forEach((bridge) =>
      Console.print(bridge)
    );
    Console.print('');
  },

  printResult(controlInstance) {
    Console.print('최종 게임 결과');
    OutputView.printMap(controlInstance);
    OutputView.finalResultTemplate(
      controlInstance.outputExit()
    ).forEach((sentence) => Console.print(sentence));

    Console.close();
  }
};

module.exports = OutputView;
