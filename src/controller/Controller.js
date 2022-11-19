const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const validator = require('../utils/validator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../model/BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');

class Controller {
  #bridgeWay;
  #userSelect;
  #BridgeGame;

  constructor() {
    this.#bridgeWay;
    this.#userSelect = [];
    this.#BridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printGameStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  getBridgeSize(size) {
    try {
      validator.checkBridgeSizeInput(size);
    } catch {
      this.inputBridgeSize();
    }
    this.#bridgeWay = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.inputUserMoving();
  }

  inputUserMoving() {
    InputView.readMoving(this.getUserMoving.bind(this));
  }

  getUserMoving(select) {
    try {
      validator.checkUserMovingInput(select);
      this.#userSelect.push(select);
      this.getMovingResult(this.#bridgeWay, this.#userSelect);
    } catch {
      this.inputUserMoving();
    }
  }

  getMovingResult(bridgeWay, userSelect) {
    let [bridgeSize, userInputLength] = [bridgeWay.length, userSelect.length];
    if (userInputLength < bridgeSize) this.inputUserMoving();
    let result = this.#BridgeGame.move(bridgeWay, userSelect, userInputLength);
  }
}

module.exports = Controller;
