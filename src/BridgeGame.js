const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./view/OutputView');

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
      OutputView.printResult();
      Console.print(this.#currentResult);
      Console.print('');
      OutputView.printFail();
      this.countRound();
      Console.close();
  }

  printResultBridge() {
    Console.print(this.#currentResult);
  }
}

module.exports = BridgeGame;
