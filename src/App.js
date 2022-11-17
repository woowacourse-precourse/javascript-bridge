const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #bridgeGame;
  #attempts;

  constructor() {
    this.#attempts = 1;
  }

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
        this.checkCompletion();
        return;
      }
      this.failGame();
    });
  }

  renderSuccessBridge() {
    const { upstairBridge, downstairBridge } = this.#bridgeGame.getConvertedBridge();
    OutputView.printMap(upstairBridge, downstairBridge);
  }

  renderFailureBridge() {
    const { upstairBridge, downstairBridge } = this.#bridgeGame.getFailureBridge(
      this.#bridgeGame.getConvertedBridge(),
    );
    OutputView.printMap(upstairBridge, downstairBridge);
  }

  checkCompletion() {
    if (this.#bridgeGame.isCompletion()) {
      Console.print('\n최종 게임 결과');
      this.renderSuccessBridge();
      this.resultGame('성공');
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
        Console.print('최종 게임 결과');
        this.renderFailureBridge();
        this.resultGame('실패');
      }
    });
  }

  resultGame(result) {
    OutputView.printResult(result, this.#attempts);
    this.end();
  }

  end() {
    Console.close();
  }

  replay() {
    this.#attempts += 1;
    this.#bridgeGame.retry();
    this.startMove();
  }
}

module.exports = App;
