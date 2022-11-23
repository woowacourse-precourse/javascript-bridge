const { Console } = require("@woowacourse/mission-utils");
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
      Console.print('');
      length = Number(length);
      this.utilizeBridgeLength(length);
    });
  }

  utilizeBridgeLength(length) {
    this.handleException(Validate.validateBridgeSize, length);
    this.bridgeGame.setBridgeLength(length);
    const bridge = BridgeMaker.makeBridge(length, this.random);
    this.bridgeGame.setBridge(bridge);

    if (length >= Constant.BRIDGE_LENGTH_MIN_RANGE && length <= Constant.BRIDGE_LENGTH_MAX_RANGE) {
      return this.inputMoving();
    }
    return this.inputBridgeSize();
  }

  handleException(validate, value) {
    try {
      validate(value);
    } catch (e) {
      OutputView.printError(e.message);
    }
  }

  inputMoving = () => {
    InputView.readMoving((word) => {
      this.handleException(Validate.validateMoving, word);

      if (word === Constant.UPPER_ALPHABET || word === Constant.LOWER_ALPHABET) {
        return this.move(word);
      }
      return this.inputMoving();
    });
  };

  move(word) {
    const [isMove, bridgeArray] = this.bridgeGame.move(word);
    const crurrentBridge = this.bridgeGame.seekCurrentBridge(bridgeArray);
    OutputView.printMap(crurrentBridge);
    this.judgePlay(isMove);
  }

  judgePlay(isMove) {
    const isComplete = this.bridgeGame.judgePlay(isMove);
    if(isComplete === true) {
      const state = this.bridgeGame.judgeState();
      const crurrentBridge = this.bridgeGame.seekCurrentBridge(this.bridgeGame.getCurrentMovingBridge());
      return OutputView.printResult(state, this.bridgeGame, crurrentBridge);
    }

    if(isComplete === false) return this.selectEndInput();

    this.inputMoving();
  }

  selectEndInput() {
    InputView.readGameCommand((word) => {
      this.handleException(Validate.validateSelectEndInput, word);

      if (word === Constant.RESTART_ALPHABET || word === Constant.END_ALPHABET) {
        return this.selectEnd(word);
      }
      return this.selectEndInput();
    });
  }

  selectEnd(word) {
    if (word === Constant.END_ALPHABET) {
      const state = this.bridgeGame.judgeState();
      const crurrentBridge = this.bridgeGame.seekCurrentBridge(this.bridgeGame.getCurrentMovingBridge());
      OutputView.printResult(state, this.bridgeGame, crurrentBridge);
    }

    if (word === Constant.RESTART_ALPHABET) {
      this.bridgeGame.retry(this.inputMoving);
    }
  }
}

module.exports = BridgeGameController;
