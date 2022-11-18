const BridgeGame = require('../BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { MESSAGE } = require('../utils/constants');

class Controller {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  // - 다리의 길이 입력 받는다.
  gameStart() {
    OutputView.printMessage(MESSAGE.startGame);

    this.inputBrideSize();
  }

  inputBrideSize() {
    InputView.readBridgeSize(this.makeWinningBridge.bind(this));
  }

  makeWinningBridge(size) {
    this.bridgeGame.makeWinningBridge(Number(size));
  }

  // - 위, 아래 중 이동할 칸 입력 받는다.
  // - 재시작 또는 종료 여부 입력 받는다.
}

module.exports = Controller;
