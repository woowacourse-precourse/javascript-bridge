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
      if(this.bridgeGame.isFail()) return this.requestRestartOrQuit();
      if(this.bridgeGame.isLast()) return this.quit();
      return this.requestDirection();
    });
  }
  requestRestartOrQuit() {
    InputView.readGameCommand((commandOption) => {
      if(commandOption === 'R') return this.restart();
      return this.quit();
        });
  }
  restart() {
    this.bridgeGame.retry();
    this.requestDirection();
  }
  quit() {
    const isFail = this.bridgeGame.isFail();
    Console.print(`${!isFail ? '\n' : ''}최종 게임 결과`);
    OutputView.printMap(this.bridgeGame.getBridgeCrossingResult());
    OutputView.printResult(this.bridgeGame.getResult());
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
