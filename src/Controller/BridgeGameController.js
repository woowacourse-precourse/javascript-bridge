const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../Domain/BridgeGame');
const BridgeMap = require('../Domain/BridgeMap');
const Bridge = require('../Domain/Bridge');
const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const SETTING = require('../constants/gameSetting');

class BridgeGameController {
  #bridgeMap = new BridgeMap();
  #bridgeGame = new BridgeGame();
  #bridge;

  gameStart() {
    this.#bridgeGame.try();
    OutputView.printGameStart();
    this.#inputBridgeSize();
  }

  #gameRetry() {
    this.#bridgeGame.retry();
    this.#bridgeMap.reset();

    return this.#inputMove();
  }

  #gameResult(isGameSuccess) {
    OutputView.printResult(
      this.#bridgeMap.getBridgeMap(),
      isGameSuccess,
      this.#bridgeGame.getAttempt()
    );
  }

  #gameCommand(gameCommand) {
    if (gameCommand === SETTING.GAME_RESTART) return this.#gameRetry();

    return this.#gameResult(false);
  }

  #move(moving) {
    const canICross = this.#bridge.canICross(this.#bridgeGame.getMoveCount(), moving);

    this.#bridgeGame.move(moving);
    this.#bridgeMap.addMoveMark(moving, canICross);
    OutputView.printMap(this.#bridgeMap.getBridgeMap());

    this.#nextStep(canICross);
  }

  #nextStep(canICross) {
    if (!canICross) return this.#inputGameCommand();

    return this.#bridgeGame.isGameSuccess(this.#bridge.getBridgeSize())
      ? this.#gameResult(true)
      : this.#inputMove();
  }

  #setBridgeSize(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.#bridge = new Bridge(bridge);

    this.#inputMove();
  }

  #inputBridgeSize() {
    InputView.readBridgeSize(this.#setBridgeSize.bind(this));
  }

  #inputMove() {
    InputView.readMoving(this.#move.bind(this));
  }

  #inputGameCommand() {
    InputView.readGameCommand(this.#gameCommand.bind(this));
  }
}

module.exports = BridgeGameController;
