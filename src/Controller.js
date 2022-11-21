const { printStart, printMap, printResult } = require("./OutputView");

const InputView = require("./InputView");
const { isInvalidBridgeLength, isInvalidMoving, isInvalidGameCommand } = require("./exception");
const { generate } = require("./BridgeRandomNumberGenerator");
const { toNumber } = require("./helpers/common");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");

class Controller {
  start() {
    printStart();
    InputView.readBridgeSize((input) => {
      this.getBridgeSize(input);
    });
  }

  getBridgeSize = (input) => {
    isInvalidBridgeLength(input) && InputView.readBridgeSize();
    const bridgeSize = toNumber(input);
    this.makeAnswerBridge(bridgeSize);
  };

  makeAnswerBridge(size) {
    const bridge = makeBridge(size, generate);
    const bridgeGame = new BridgeGame(bridge);
    InputView.readMoving(bridgeGame);
  }

  // (input) => {
  //   isInvalidBridgeLength(input) && InputView.readBridgeSize();
  //   const bridgeSize = toNumber(input);
  //   const bridge = makeBridge(bridgeSize, generate);
  //   const bridgeGame = new BridgeGame(bridge);
  //   InputView.readMoving(bridgeGame);
  // }
}

module.exports = Controller;
