const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('./Validation');

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
      const { errorMsg } = Validation.checkBridgeSize(size);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.requestBridgeSize();
      }

      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);

      this.requestDirection();
    });
  }

  requestDirection() {
    InputView.readMoving((direction) => {
      const { errorMsg } = Validation.checkDirection(direction);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.requestDirection();
      }

      this.bridgeGame.move(direction);
      OutputView.printMap(this.bridgeGame.getBridgeCrossingResult());

      if (this.bridgeGame.isFail()) return this.requestRestartOrQuit();

      if (this.bridgeGame.isLast()) return Console.print('게임 종료로 이동');

      return this.requestDirection();
    });
  }

  requestRestartOrQuit() {
    InputView.readGameCommand((commandOption) => {
      const { errorMsg } = Validation.checkCommandOption(commandOption);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
