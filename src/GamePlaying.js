const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const GamePlaying = {
  gameMap: [],

  gameStartPrint() {
    OutputView.gameStart();
  },

  gameResultPrint(count, winOrLose) {
    if (winOrLose) {
      OutputView.printResult("성공", count, this.gameMap);
    } else {
      OutputView.printResult("실패", count, this.gameMap);
    }
    // const result = winOrLose
    //   ? OUTPUT_MESSAGE.SUCCESS_RESULT
    //   : OUTPUT_MESSAGE.FAILURE_RESULT;
    // OutputView.printResult(result, count, this.gameMap);
  },
  matchOneStep(obstacle, bridgeGame) {
    try {
      const movePoint = InputView.readMoving();
      if (!bridgeGame.move(movePoint, obstacle)) {
        this.gameMap = bridgeGame.bridgeDrawing(movePoint, false);
        OutputView.printMap(this.gameMap);
        return false;
      }
      this.gameMap = bridgeGame.bridgeDrawing(movePoint, true);
      OutputView.printMap(this.gameMap);
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
    return retry;
  },
  BridgeMaker() {
    let bridge;
    try {
      const birdgeSize = InputView.readBridgeSize();
      bridge = BridgeMaker.makeBridge(
        birdgeSize,
        BridgeRandomNumberGenerator.generate
      );
    } catch (error) {
      console.log(error);
    }
    return bridge;
  },
};

module.exports = GamePlaying;
