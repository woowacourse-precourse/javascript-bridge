const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./view/OutputView');
const BridgeGameProceed = require('./BridgeGameProceed')

class BridgeGame {
  #round = 1;

  #currentResult

  storage(result) {
    this.#currentResult = result;
    return ;
  }

  move() {
    this.#round += 1;
  }

  countRound() {
    OutputView.printAttemptCount(this.#round);
  }

  retry() {
    this.move();
    Console.print('');
  }

  fail() {
    OutputView.printResult();
    this.printResultBridge();
    Console.print('');
    OutputView.printFail();
    this.countRound();
    Console.close();
  }

  win() {
    OutputView.printResult()
    this.printResultBridge();
    Console.print('');
    OutputView.printWin()
    this.countRound();
    Console.close();
  }

  printResultBridge() {
    Console.print(this.#currentResult);
  }
}

module.exports = BridgeGame;
