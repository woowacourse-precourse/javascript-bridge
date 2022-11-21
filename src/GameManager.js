const Validation = require("./Validation");
const InputView = require("./InputView");
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

  inputRetry(callback) {
    InputView.readGameCommand('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (input) => {
      Validation.checkRetryCommand(input);
      callback(input);
    })
  }
}

module.exports = GameManager;