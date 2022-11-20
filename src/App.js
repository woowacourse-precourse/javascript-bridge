const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');

class App {
  play() {
    OutputView.printStart();
    this.makeStart();
  }

  makeStart() {
    const bridgeLength = InputView.readBridgeSize();
    const randomBridge = BridgeRandomNumberGenerator.generate();
    const makeBridge = BridgeMaker.makeBridge(bridgeLength, randomBridge);
    const userMoveInput = InputView.readMoving();
    let count = 0;
    this.userMove(makeBridge, userMoveInput, count);
  }

  userMove(madeBridge, moveInput, count) {
    const bridgeGame = new BridgeGame();
    let bridgeMove = bridgeGame.move(madeBridge, moveInput, count);
    OutputView.printMap(bridgeMove);
    if (bridgeMove[0].includes('X') || bridgeMove[1].includes('X')) {
      const userDecision = InputView.readGameCommand();
      const reTryCheck = bridgeGame.retry(userDecision);
      if (!reTryCheck) {
        const RESULT_MESSAGE = '실패';
        count += 1;
        OutputView.printResult(RESULT_MESSAGE, count);
      }
      if (reTryCheck) {
        bridgeMove = [[], []];
        count += 1;
        this.userMove(madeBridge, moveInput, count);
      }
    }
    if (madeBridge.length === bridgeMove.length) {
      const RESULT_MESSAGE = '성공';
      count += 1;
      OutputView.printResult(RESULT_MESSAGE, count);
    }
  }
}

module.exports = App;
