const MissionUtils = require('@woowacourse/mission-utils');
const {
  BridgeConfig,
  GameConfig,
  AppConfig,
  Message,
} = require('./Config');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Bridge = require('./Bridge');
const BridgeGame = require('./BridgeGame');
const GameLogger = require('./GameLogger');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #game;

  #logger;

  static requestUserInput(inputFunction) {
    let errorCount;
    let input = false;
    for (errorCount = -1; !input && errorCount < AppConfig.MAX_ERROR_PATIENCE; errorCount += 1) {
      input = App.#tryInput(inputFunction);
    }
    if (errorCount === AppConfig.MAX_ERROR_PATIENCE) throw new Error(Message.ERROR_TOO_MANY);
    return input;
  }

  static isSingleGameEnd(resultStatus) {
    if (resultStatus === GameConfig.STATUS_PLAY) return false;
    return true;
  }

  static #tryInput(inputFunction) {
    try {
      return inputFunction();
    } catch (error) {
      OutputView.printErrorLog(error);
      return false;
    }
  }

  play() {
    try {
      this.#play();
    } catch (error) {
      OutputView.printErrorLog(error);
    }
  }

  startGame(bridgeLength) {
    let bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
    bridge = new Bridge(bridge);
    this.#game = new BridgeGame(bridge);
    this.#logger = new GameLogger();
  }

  playSingleGame() {
    let resultStatus = GameConfig.STATUS_PLAY;
    while (!App.isSingleGameEnd(resultStatus)) {
      const direction = App.requestUserInput(InputView.readMoving);
      resultStatus = this.movePlayer(direction);
      OutputView.printMap(this.#logger);
    }
    return resultStatus;
  }

  movePlayer(direction) {
    const resultStatus = this.#game.move(direction);
    this.#logger.logMoveResult(direction, resultStatus);
    return resultStatus;
  }

  #play() {
    OutputView.printGameStartMessage();
    this.startGame(App.requestUserInput(InputView.readBridgeSize));
    const isSuccess = this.#singleGameLoop();
    OutputView.printResult(this.#logger, isSuccess);
  }

  #singleGameLoop() {
    while (true) {
      this.#logger.logNewTrial();
      if (this.playSingleGame() === GameConfig.STATUS_SUCCESS) return true;
      if (this.requestUserInput(InputView.readGameCommand) === GameConfig.QUIT) return false;
    }
  }
}

module.exports = App;
