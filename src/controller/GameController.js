const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const { validateBridgeSize, validateNext } = require('../errorHandling');

class GameController {
  #game;

  start() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.askBridge();
  }

  askBridge() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    validateBridgeSize.validate(size);
    const bridge = BridgeMaker.makeBridge(size, () =>
      BridgeRandomNumberGenerator.generate()
    );
    console.log(bridge);
    this.#game = new BridgeGame(bridge);
    this.askMoving(size);
  }

  askMoving() {
    InputView.readMoving(this.setMoving.bind(this));
  }

  setMoving(next) {
    validateNext.validate(next);
    const result = this.#game.move(next);

    if (result === 1) {
      console.log('성공');
      this.askMoving();
    } else {
      console.log('실패');
    }
  }
}

module.exports = GameController;
