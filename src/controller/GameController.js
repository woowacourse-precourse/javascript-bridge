const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const { validateBridgeSize, validateNext } = require('../errorHandling');

class GameController {
  constructor() {
    this.game = new BridgeGame();
  }

  start() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.askBridge();
  }

  askBridge() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    validateBridgeSize.validate(size);
    this.game.setBridge(size);
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.setMoving.bind(this));
  }

  setMoving(next) {
    validateNext.validate(next);
    const result = this.game.move(next);

    if (result === 1) this.askMoving();
    if (result === 0) console.log('실패');

    if (result !== 1 && result !== 0) console.log('성공');
  }
}

module.exports = GameController;
