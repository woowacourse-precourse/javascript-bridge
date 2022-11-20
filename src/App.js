const { Console } = require('@woowacourse/mission-utils');

const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    this.startGame();
  }

  startGame() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }

  createBridge(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    this.bridgeGame.setBridge(bridge);

    this.getMoving();
  }

  getMoving() {
    InputView.readMoving(this.crossingBridge.bind(this));
  }

  crossingBridge(move) {
    this.bridgeGame.isSuccess(move) ? this.success(move) : this.fail(move);
    if (this.bridgeGame.isEnd(move)) {
      return OutputView.printResult(
        this.bridgeGame.getMap(),
        this.bridgeGame.getResult(),
      );
    }
    this.getMoving();
  }

  success(move) {
    this.bridgeGame.success(move);
    OutputView.printMap(this.bridgeGame.getMap());
  }

  fail(move) {
    this.bridgeGame.fail(move);
    OutputView.printMap(this.bridgeGame.getMap());
  }
}

const app = new App();
app.play();

module.exports = App;
