const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const BridgeGame = require('./BridgeGame');

class Referee {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  init() {
    InputView.readBridgeSize((answer) => {
      this.bridgeGame.bridge.makeBridge(answer, () => this.init());
      this.start();
    });
  }

  start() {
    this.bridgeGame.move(
      () => this.resultAnalysis(),
      () => this.start(),
    );
  }

  resultAnalysis() {
    const compareResult = this.bridgeGame.bridge.getCompareResult();
    OutputView.printMap(compareResult);
    this.judgement(compareResult);
  }

  judgement(compareResult) {
    if (Referee.#isOver(compareResult)) {
      InputView.readGameCommand();
    }
    if (this.bridgeGame.bridge.bridge.length === compareResult[0].length) {
      OutputView.printResult();
    }
  }

  static #isOver(compareResult) {
    const upStage = compareResult[0];
    const downStage = compareResult[1];

    for (let index = 0; index < upStage.length; index += 1) {
      if (upStage[index] === 'X' || downStage[index] === 'X') return true;
    }

    return false;
  }
}
module.exports = Referee;
