const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../Model/BridgeGame');
const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const SETTING = require('../constants/gameSetting');

class BridgeGameController {
  #bridgeGame = new BridgeGame();

  gameStart() {
    this.#bridgeGame.try();
    OutputView.printGameStart();
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  gameEnd() {
    OutputView.printResult(
      this.#bridgeGame.getBridgeMap(),
      this.#bridgeGame.isGameSuccess(),
      this.#bridgeGame.getAttempt()
    );
  }

  inputMove() {
    InputView.readMoving(this.move.bind(this));
  }

  inputGameCommand() {
    InputView.readGameCommand(this.gameCommand.bind(this));
  }

  gameCommand(gameCommand) {
    if (gameCommand === SETTING.GAME_RESTART) {
      this.#bridgeGame.retry();
      return this.inputMove();
    }

    return this.gameEnd();
  }

  move(moving) {
    this.#bridgeGame.move(moving);
    OutputView.printMap(this.#bridgeGame.getBridgeMap());
    if (this.#bridgeGame.isAlive()) {
      if (this.#bridgeGame.isGameSuccess()) return this.gameEnd();

      return this.inputMove();
    }

    return this.inputGameCommand();
  }

  setBridge(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.#bridgeGame.setBridge(bridge);
    this.inputMove();
  }
}

module.exports = BridgeGameController;
