const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const BridgeGame = require('./BridgeGame');
const CONSTANT = require('../constant');

const { QUIT_MARK, RESTART_MARK, FAIL_MARK } = CONSTANT.MARKS;
const { INPUT_ERROR } = CONSTANT.ERROR_MESSAGE;

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
      InputView.readGameCommand((answer) => this.gameCommand(answer));
    } else if (this.bridgeGame.bridge.bridge.length === compareResult[0].length) {
      this.endGame();
    } else {
      this.start();
    }
  }

  gameCommand(answer) {
    try {
      Referee.#gameCommandValidate(answer);
      if (answer === RESTART_MARK) this.bridgeGame.retry(() => this.resultAnalysis());
      else this.endGame();
    } catch {
      OutputView.printGameCommandError();
      InputView.readGameCommand((reanswer) => this.gameCommand(reanswer));
    }
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

  static #gameCommandValidate(answer) {
    if (!(answer === RESTART_MARK || answer === QUIT_MARK)) {
      throw new Error(INPUT_ERROR);
    }
  }
}
module.exports = Referee;
