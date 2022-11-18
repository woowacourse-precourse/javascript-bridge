const BridgeGame = require('../BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { MESSAGE } = require('../utils/constants');

class Controller {
  constructor() {
    this.bridgeGame = new BridgeGame(this);
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
    if (this.bridgeGame.isFinished()) return this.getResult();

    if (canMove) return this.inputMoving();
    if (!canMove) return this.retry();
  }

  // - 재시작 또는 종료 여부 입력 받는다.
  retry() {
    console.log('다시 시작할꺼에요?');
  }

  getResult() {
    const [tryingCount, isSucceeded, upperBridge, lowerBridge] =
      this.bridgeGame.getResult();
    this.printResult(tryingCount, isSucceeded, upperBridge, lowerBridge);
  }

  printResult(tryingCount, isSucceeded, upperBridge, lowerBridge) {
    OutputView.printResult(tryingCount, isSucceeded, upperBridge, lowerBridge);
  }
}

module.exports = Controller;
