const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

class GameController {
  constructor() {
    this.outputView = OutputView;
  }

  start() {
    this.outputView.printStartMessage();
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = GameController;
