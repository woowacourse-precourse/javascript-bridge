const { Console } = require('@woowacourse/mission-utils');

const BridgeGameProceed = require('./BridgeGameProceed');
const OutputView = require('./view/OutputView');


class BridgeGame {
  
  move() {

  }

  retry(retryOrNot, result) {
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
