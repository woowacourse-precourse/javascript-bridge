const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./view/OutputView');

class BridgeGame {
  #round = 1;

  move() {
    this.#round += 1;
  }

  countRound() {
    OutputView.printAttemptCount(this.#round);
  }

  retry(result) {
      OutputView.printResult();
      Console.print(result);
      Console.print('');
      OutputView.printFail();
      this.countRound();
      Console.close();
  }
}

module.exports = BridgeGame;
