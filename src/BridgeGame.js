const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./view/OutputView');


class BridgeGame {
  constructor() {

  }
  
  move() {

  }

  retry(retryOrNot, result) {
    if (retryOrNot === "R") return this.game();
    if (retryOrNot === "Q") {
      OutputView.printResult();
      Console.print(result);
      OutputView.printFail();
      // OutputView.printAttemptCount(this.#round);
      Console.close();
    }
  }

  
}

module.exports = BridgeGame;
