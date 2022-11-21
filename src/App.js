const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');

class App {
  constructor() {
    this.tryCount = 1;
    this.bridgeArray = [[], []];
  }

  play() {
    OutputView.printStart();
    this.makeStart();
  }

  makeStart() {
    const bridgeLength = InputView.readBridgeSize();
    const randomBridge = BridgeRandomNumberGenerator.generate();
    const makeBridge = BridgeMaker.makeBridge(bridgeLength, randomBridge);
    const userMoveInput = InputView.readMoving();
    this.userMove(makeBridge, userMoveInput);
  }

  userMove(madeBridge, moveInput) {
    const bridgeGame = new BridgeGame();
    let bridgeMove = bridgeGame.move(madeBridge, moveInput, this.tryCount);
    OutputView.printMap(bridgeMove);
    if (bridgeMove[0].includes('X') || bridgeMove[1].includes('X')) {
      const userDecision = InputView.readGameCommand();
      const reTryCheck = bridgeGame.retry(userDecision);
      if (!reTryCheck) {
        const RESULT_MESSAGE = '실패';
        this.tryCount += 1;
        OutputView.printResult(RESULT_MESSAGE, this.tryCount);
      }
      if (reTryCheck) {
        bridgeMove = [[], []];
        this.tryCount += 1;
        this.userMove(madeBridge, moveInput, this.tryCount);
      }
    }
    if (madeBridge.length === bridgeMove.length) {
      const RESULT_MESSAGE = '성공';
      this.tryCount += 1;
      OutputView.printResult(RESULT_MESSAGE, this.tryCount);
    }

    this.tryCount =+ 1;
    this.userMove(madeBridge, moveInput, this.tryCount);
  }
}

module.exports = App;
