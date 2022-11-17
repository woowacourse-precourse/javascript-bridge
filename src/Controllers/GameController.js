const InputView = require('../Views/InputView');
const OutputView = require('../Views/OutputView');
const BridgeMaker = require('../BridgeMaker');
const { generateRandomNumber } = require('../utils/bridgeHandler');

// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
/**
 * 다리 건너기 게임을 관리하는 클래스
 */

class GameController {
  constructor() {
    this.outputView = OutputView;
    this.inputView = InputView;
    this.size = 0;
  }

  startGame() {
    this.outputView.printStart();
    this.selectBridgeSize();
  }

  selectBridgeSize() {
    this.inputView.readBridgeSize();
  }

  createBridge() {
    const myBridge = BridgeMaker(this.size, generateRandomNumber);
  }
}

module.exports = GameController;
