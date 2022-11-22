const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_GAME } = require('./constants/Settings')

// const OutputView = require('./view/OutputView');

class BridgeGame {
  #round = BRIDGE_GAME.start_value;

  #currentResult

  // storage(result) {
  //   this.#currentResult = result;
  // }

  // move() {
  //   this.#round += BRIDGE_GAME.start_value;
  // }

  // countRound() {
  //   OutputView.printAttemptCount(this.#round);
  // }

  // retry() {
  //   this.move();
  //   Console.print(BRIDGE_GAME.new_line);
  // }

  // fail() {
  //   OutputView.printResult();
  //   this.printResultBridge();
  //   Console.print(BRIDGE_GAME.new_line);
  //   OutputView.printFail();
  //   this.countRound();
  //   Console.close();
  // }

  // win() {
  //   OutputView.printResult()
  //   this.printResultBridge();
  //   Console.print(BRIDGE_GAME.new_line);
  //   OutputView.printWin()
  //   this.countRound();
  //   Console.close();
  // }

  // printResultBridge() {
  //   OutputView.printMap(this.#currentResult);
  // }
}

module.exports = BridgeGame;
