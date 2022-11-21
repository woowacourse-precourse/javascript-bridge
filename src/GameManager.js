const InputView = require("./InputView");
const Validation = require("./Validation");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");


const { INPUT_QUESTION } = require("./utils/Constants");



class GameManager {

  inputBridgeSize(callback) {
    InputView.readBridgeSize(INPUT_QUESTION.bridgeLen, (bridgeSize) => {
      Validation.checkBridgeLength(bridgeSize);
      const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      callback(bridge);
    });
  }

  inputMovingSpace(callback) {
    InputView.readMoving(INPUT_QUESTION.move, (space) => {
      Validation.checkSpace(space);
      callback(space);
    })
  }

}

module.exports = GameManager;