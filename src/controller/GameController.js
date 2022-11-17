const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const { validateBridgeSize, validateNext } = require('../errorHandling');

class GameController {
  #bridge;

  start() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.askBridge();
  }

  askBridge() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    validateBridgeSize.validate(size);
    this.#bridge = BridgeMaker.makeBridge(size, () =>
      BridgeRandomNumberGenerator.generate()
    );
    console.log(this.#bridge);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.setMoving.bind(this));
  }

  setMoving(next) {
    validateNext.validate(next);
    //  이동하는 로직
  }
}

module.exports = GameController;
