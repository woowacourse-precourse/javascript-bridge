const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #bridgeGame;

  makeGame(length) {
    this.#bridgeGame = new BridgeGame(Number(length));
  }

  play() {
    OutputView.printStartGame();
    this.makeBridge();
  }

  makeBridge() {
    InputView.readBridgeSize((length) => {
      this.makeGame(length);
      this.startMove();
    });
  }

  startMove() {
    InputView.readMoving((direction) => {
      if (this.#bridgeGame.isMove(direction)) {
        this.#bridgeGame.move();
        this.renderSuccessBridge();
        return;
      }
      this.failGame();
    });
  }

  renderSuccessBridge() {
    const { upstairBridge, downstairBridge } = this.#bridgeGame.getConvertedBridge();

    //console.log(upstairBridge);
    //console.log(downstairBridge);
    this.checkCompletion();
  }

  renderFailureBridge() {
    const { upstairBridge, downstairBridge } = this.#bridgeGame.getFailureBridge(
      this.#bridgeGame.getConvertedBridge(),
    );
    console.log(upstairBridge);
    console.log(downstairBridge);
  }

  checkCompletion() {
    if (this.#bridgeGame.isCompletion()) {
      this.resultGame();
      return;
    }
    this.startMove();
  }

  failGame() {
    this.renderFailureBridge();
    InputView.readGameCommand((command) => {
      if (command === 'R') {
        this.replay();
      } else if (command === 'Q') {
        this.resultGame();
      }
    });
  }

  resultGame() {
    console.log('\n결과 // 게임 종료 (성공했을 때 or 실패 후 종료)');
    this.end();
  }

  end() {
    Console.close();
  }

  replay() {
    this.#bridgeGame.retry();
    this.startMove();
  }
}

module.exports = App;
