const { Console } = require('@woowacourse/mission-utils');


class BridgeGame {
  constructor() {

  }
  
  move() {

  }

  retry(retryOrNot, result) {
    if (retryOrNot === "R") return this.game();
    if (retryOrNot === "D") {
      OutputView.printResult();
      Console.print(result);
      OutputView.printFail();
      // OutputView.printAttemptCount(this.#round);
      Console.close();
    }
  }

  
}

module.exports = BridgeGame;
