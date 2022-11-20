const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../Model/BridgeGame');
const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const SETTING = require('../constants/gameSetting');

class BridgeGameController {
  #bridgeGame;

  gameStart() {
    this.#bridgeGame = new BridgeGame();
    this.#bridgeGame.try();

    OutputView.printGameStart();
    InputView.readBridgeSize(this.setBridgeGame.bind(this));
  }

  inputMove() {
    InputView.readMoving(this.move.bind(this));
  }

  gameEnd() {
    const map = this.#bridgeGame.getBridgeMap();
    const isGameSuccess = this.#bridgeGame.isGameSuccess();
    const attempt = this.#bridgeGame.getAttempt();

    OutputView.printResult(map, isGameSuccess, attempt);
  }

  retry(gameCommand) {
    if (gameCommand === SETTING.GAME_RESTART) {
      this.#bridgeGame.retry();
      return this.inputMove();
    }

    if (gameCommand === SETTING.GAME_QUIT) {
      return this.gameEnd();
    }
  }

  gameRestart() {
    InputView.readGameCommand(this.retry.bind(this));
  }

  move(moving) {
    const canMove = this.#bridgeGame.canMove(moving);

    this.#bridgeGame.move(moving, canMove);
    OutputView.printMap(this.#bridgeGame.getBridgeMap());
    if (canMove) return this.#bridgeGame.isGameSuccess() ? this.gameEnd() : this.inputMove();

    return this.gameRestart();
  }

  setBridgeGame(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);

    this.#bridgeGame.setBridgeGame(bridge);

    this.inputMove();
  }
}

module.exports = BridgeGameController;
