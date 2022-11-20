const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./view/OutputView');

class BridgeGame {
  #round = 0;

  move() {
    this.#round += 1;
  }

  retry(result) {
      OutputView.printResult();
      Console.print(result);
      Console.print('');
      OutputView.printFail();
      OutputView.printAttemptCount(this.#round);
      Console.close();
  }
}

module.exports = BridgeGame;
