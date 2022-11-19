const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const IsValid = require('./utils/Validator');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #bridgeGame;
  #attempts;

  constructor() {
    this.#attempts = 1;
  }

  play() {
    OutputView.printStartGame();
    this.readValidLength();
  }

  readValidLength() {
    InputView.readBridgeSize((length) => {
      if (IsValid.bridgeSize(length)) {
        this.makeBridge(length);
        return;
      }
      this.readValidLength();
    });
  }

  makeGame(length) {
    const bridge = BridgeMaker.makeBridge(Number(length), BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge, 0);
  }

  makeBridge(length) {
    this.makeGame(length);
    this.readValidDirection();
  }

  readValidDirection() {
    InputView.readMoving((direction) => {
      if (IsValid.direction(direction)) {
        this.startMove(direction);
        return;
      }
      this.readValidDirection();
    });
  }

  startMove(direction) {
    if (this.#bridgeGame.isMove(direction)) {
      this.#bridgeGame.move();
      this.renderBridge('성공');
      this.checkCompletion();
      return;
    }
    this.failGame();
  }

  renderBridge(result) {
    let convertedBridge = this.#bridgeGame.getConvertedBridge();
    if (result === '실패') {
      convertedBridge = this.#bridgeGame.getFailureBridge(convertedBridge);
    }
    OutputView.printMap(convertedBridge);
  }

  checkCompletion() {
    if (this.#bridgeGame.isCompletion()) {
      this.resultGame('성공');
      return;
    }
    this.readValidDirection();
  }

  failGame() {
    this.renderBridge('실패');
    InputView.readGameCommand((command) => {
      if (command === 'R') {
        this.replay();
        return;
      }
      this.resultGame('실패');
    });
  }

  resultGame(result) {
    Console.print('최종 게임 결과');
    this.renderBridge(result);
    OutputView.printResult(result, this.#attempts);
    this.end();
  }

  end() {
    Console.close();
  }

  replay() {
    this.#attempts += 1;
    this.#bridgeGame.retry();
    this.readValidDirection();
  }
}

module.exports = App;
