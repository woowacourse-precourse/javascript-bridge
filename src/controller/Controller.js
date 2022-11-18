const BridgeGame = require('../BridgeGame');
// const CurrBridge = require('../CurrBridge');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { MESSAGE } = require('../utils/constants');

class Controller {
  constructor() {
    this.bridgeGame = new BridgeGame(this);
    // this.currBridge = new currBridge(this);
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
    OutputView.printMessage('');
    this.bridgeGame.makeWinningBridge(Number(size));
  }

  // - 위, 아래 중 이동할 칸 입력 받는다.
  inputMoving() {
    InputView.readMoving(this.move.bind(this));
  }

  move(direction) {
    this.bridgeGame.validate(direction);
    this.bridgeGame.move(direction);
  }

  printMoving(canMove, upperBridge, lowerBridge) {
    OutputView.printMap(upperBridge, lowerBridge);

    if (canMove) this.inputMoving();
    if (!canMove) this.retry();
  }

  // - 재시작 또는 종료 여부 입력 받는다.
  retry() {
    console.log('다시 시작할꺼에요?');
  }
}

module.exports = Controller;
