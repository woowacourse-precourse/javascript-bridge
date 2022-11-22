const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    this.requestBridgeSize();
  }
  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);
      this.requestDirection();
    });
  }
  requestDirection() {
    InputView.readMoving((direction) => {
      this.bridgeGame.move(direction);
      OutputView.printMap(this.bridgeGame.getBridgeCrossingResult());
    })
  }
}

const app = new App();
app.play();
module.exports = App;
