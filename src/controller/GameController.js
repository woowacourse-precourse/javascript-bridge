const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const {
  validateBridgeSize,
  validateNext,
  validateGameCommand,
} = require('../errorHandling');

class GameController {
  constructor() {
    this.game = new BridgeGame();
  }

  start() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.askBridge();
  }

  askBridge() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    validateBridgeSize.validate(size);
    this.game.setBridge(size);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.setMoving.bind(this));
  }

  setMoving(next) {
    validateNext.validate(next);

    const isSuccess = this.game.move(next);

    OutputView.printMap(this.game.getMap(), isSuccess);

    if (isSuccess) {
      this.game.isEnd() ? Console.close() : this.askMoving();
    } else {
      this.askGameCommand();
    }
  }

  askGameCommand() {
    InputView.readGameCommand(this.setGameCommand.bind(this));
  }

  setGameCommand(gameCommand) {
    validateGameCommand.validate(gameCommand);
  }
}

module.exports = GameController;
