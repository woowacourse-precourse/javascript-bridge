const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const BridgeGame = require('./BridgeGame');
const CONSTANT = require('../constant');
const Validate = require('../utils/validate');

const { RESTART_MARK, FAIL_MARK } = CONSTANT.MARKS;

class Referee {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.isStart = false;
  }

  init() {
    if (this.isStart === false) {
      OutputView.printStartMessage();
      this.isStart = true;
    }
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
      return InputView.readGameCommand((answer) => this.gameCommand(answer));
    }

    if (this.bridgeGame.bridge.bridge.length === compareResult[0].length) return this.endGame();

    return this.start();
  }

  gameCommand(answer) {
    try {
      Validate.gameCommandValidate(answer);
      this.endOrRestart(answer);
    } catch {
      OutputView.printGameCommandError();
      InputView.readGameCommand((reanswer) => this.gameCommand(reanswer));
    }
  }

  endOrRestart(answer) {
    if (answer === RESTART_MARK) {
      this.bridgeGame.retry(() => this.resultAnalysis());
      return;
    }

    this.endGame();
  }

  endGame() {
    const compareResult = this.bridgeGame.bridge.getCompareResult();
    const executionCount = this.bridgeGame.getExecutionCount();
    const gameStatus = Referee.#isOver(compareResult);
    OutputView.printResult(compareResult, executionCount, gameStatus);
    this.isStart = false;
  }

  static #isOver(compareResult) {
    const upStage = compareResult[0];
    const downStage = compareResult[1];

    for (let index = 0; index < upStage.length; index += 1) {
      if (upStage[index] === FAIL_MARK || downStage[index] === FAIL_MARK) return true;
    }

    return false;
  }
}
module.exports = Referee;
