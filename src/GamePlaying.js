const BridgeMaker = require("./BridgeMaker");
const BridgeGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const OUTPUT_MESSAGE = require("./constans/OutputMessage");

const GamePlaying = {
  gameMap: [],

  gameStartPrint() {
    OutputView.gameStart();
  },

  gameResultPrint(count, winOrLose) {
    const result = winOrLose
      ? OUTPUT_MESSAGE.SUCCESS_RESULT
      : OUTPUT_MESSAGE.FAILURE_RESULT;
    OutputView.printResult(result, count, this.gameMap);
  },

  gameMapCrate(movePoint, bridgeGame, bool) {
    this.gameMap = bridgeGame.bridgeDrawing(movePoint, bool);
    OutputView.printMap(this.gameMap);
    if (bool === false) {
      return false;
    }
  },

  matchOneStep(obstacle, bridgeGame) {
    try {
      const movePoint = InputView.readMoving();
      if (!bridgeGame.move(movePoint, obstacle)) {
        return this.gameMapCrate(movePoint, bridgeGame, false);
      }
      this.gameMapCrate(movePoint, bridgeGame, true);
    } catch (error) {
      OutputView.printException(error);
    }
    return true;
  },

  BridgeMove(bridge) {
    const bridgeGame = new BridgeGame();
    for (let i = 0; i < bridge.length; i++) {
      if (!this.matchOneStep(bridge[i], bridgeGame)) {
        return false;
      }
    }
    return true;
  },

  requestGame(result) {
    let retry;
    if (result) return false;
    const command = InputView.readGameCommand();
    const bridgeGame = new BridgeGame();
    try {
      retry = bridgeGame.retry(command);
    } catch (error) {
      OutputView.printException(error);
    }
    return retry;
  },

  BridgeMaker() {
    let bridge;
    try {
      const bridgeSize = InputView.readBridgeSize();
      bridge = BridgeMaker.makeBridge(bridgeSize, BridgeGenerator.generate);
    } catch (error) {
      OutputView.printException(error);
    }
    return bridge;
  },
};

module.exports = GamePlaying;
