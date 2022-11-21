const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../Domain/BridgeGame');
const BridgeMap = require('../Domain/BridgeMap');
const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const SETTING = require('../constants/gameSetting');
const Bridge = require('../Domain/Bridge');

class BridgeGameController {
  #bridgeGame;
  #bridgeMap;
  #bridge;

  gameStart() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.setBridgeGame.bind(this));
  }

  gameResult(isGameSuccess) {
    OutputView.printResult(
      this.#bridgeMap.getBridgeMap(),
      isGameSuccess,
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
      this.#bridgeMap.reset();
      return this.inputMove();
    }

    return this.gameResult(false);
  }

  move(moving) {
    const canICross = this.#bridge.canICross(this.#bridgeGame.getMoveCount(), moving);

    this.#bridgeGame.move(moving);
    this.#bridgeMap.addMoveMark(moving, canICross);
    OutputView.printMap(this.#bridgeMap.getBridgeMap());
    if (canICross)
      return this.#bridgeGame.isGameSuccess() ? this.gameResult(true) : this.inputMove();

    return this.inputGameCommand();
  }

  setBridgeGame(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);

    this.#bridgeMap = new BridgeMap();
    this.#bridge = new Bridge(bridge);
    this.#bridgeGame = new BridgeGame(bridgeSize);
    this.#bridgeGame.try();

    this.inputMove();
  }
}

module.exports = BridgeGameController;
