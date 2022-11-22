const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const { FAIL_MESSAGE, SUCCESS_MESSAGE } = require('./constant/outputMessage');

class App {
  constructor() {
    this.tryCount = 1;
    this.bridgeArray = [[], []];
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize();
  }

  makeLength() {
    const bridgeLength = InputView.readBridgeSize();
    this.makeBridge(bridgeLength);
  }

  makeBridge(length) {
    const makeBridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate());
    let resultBridge = [[], []];
    MissionUtils.Console.print(makeBridge);
    this.userMove(length, makeBridge, resultBridge);
  }

  userMove(length, Bridges, resultBridge) {
    const userMoveInput = InputView.readMoving();
    for (let i = 0; i < length; i++) {
      resultBridge = this.bridgeGame.move(userMoveInput, Bridges, this.bridgeArray);
      OutputView.printMap(resultBridge);
      if (this.failCheck(resultBridge)) return this.restartCheck(length, Bridges, resultBridge);
    }
    OutputView.printResult(SUCCESS_MESSAGE, this.tryCount, resultBridge);
  }

  failCheck(resultBridges) {
    if (resultBridges[0].includes('X') || resultBridges[1].includes('X')) return true;

    return false;
  }

  restartCheck(length, Bridges, resultBridge) {
    const userDecision = InputView.readGameCommand();
    const userResult = this.bridgeGame.retry(userDecision);
    if (!userResult) {
      OutputView.printResult(FAIL_MESSAGE, this.tryCount, resultBridge);
    }
    if (userResult) {
      this.tryCount += 1;
      this.bridgeArray = [[], []];
      resultBridge = [[], []];
      this.userMove(length, Bridges, resultBridge);
    }
  }
}

module.exports = App;
