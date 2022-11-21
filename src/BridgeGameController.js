const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const Validate = require("./Validate");
const Constant = require('./Constant');

class BridgeGameController {
  constructor() {
    OutputView.printStart();
    this.bridgeGame = new BridgeGame();
    this.random = BridgeRandomNumberGenerator.generate;
  }

  inputBridgeSize() {
    InputView.readBridgeSize((length) => {
      length = Number(length);
      this.utilizeBridgeLength(length);
    });
  }

  utilizeBridgeLength(length) {
    this.tryCatch(Validate.bridgeSizeValidate, length);
    this.bridgeGame.setBridgeLength(length);
    const bridge = BridgeMaker.makeBridge(length, this.random);
    this.bridgeGame.setBridge(bridge);

    if (length >= Constant.BRIDGE_LENGTH_MIN_RANGE && length <= Constant.BRIDGE_LENGTH_MAX_RANGE) {
      return this.inputMoving();
    }
    return this.inputBridgeSize();
  }

  tryCatch(validate, value) {
    try {
      validate(value);
    } catch (e) {
      OutputView.printError(e);
    }
  }

  inputMoving = () => {
    InputView.readMoving((word) => {
      this.tryCatch(Validate.movingValidate, word);

      if (word === Constant.UPPER_ALPHABET || word === Constant.LOWER_ALPHABET) {
        return this.move(word);
      }
      return this.inputMoving();
    });
  };

  move(word) {
    const [isMove, bridgeArray] = this.bridgeGame.move(word);
    OutputView.printMap(bridgeArray);
    this.judgePlay(isMove);
  }

  judgePlay(isMove) {
    const isComplete = this.bridgeGame.judgePlay(isMove);
    if(isComplete === true) {
      const state = this.bridgeGame.judgeState();
      return OutputView.printResult(state, this.bridgeGame);
    }

    if(isComplete === false) return this.selectEndInput();

    this.inputMoving();
  }

}

module.exports = BridgeGameController;
