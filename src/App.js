const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_MESSAGE } = require('./constants/constants');
const makePrintBridge = require('./utils/makePrintBridge');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');

function check(input) {
  return input;
}

class App {
  #myBridge;
  #myBridgeLength;

  constructor() {}

  play() {
    OutputView.gameStart();
    this.getBridgeLength();
  }

  getBridgeLength() {
    InputView.readBridgeSize((input) => {
      this.#myBridgeLength = input;
      Console.print(this.#myBridgeLength);

      return this.makeMyBridge();
    });
  }

  makeMyBridge() {
    // 다리 객체 생성! -> 다리만드는함수, 랜덤숫자넣어주는함수, 다리 길이 넣어주기
    this.#myBridge = new BridgeGame(
      BridgeRandomNumberGenerator.generate,
      BridgeMaker.makeBridge,
      this.#myBridgeLength
    );
    return this.moveBridge();
  }

  moveBridge() {
    InputView.readMoving((input) => {
      const move = this.#myBridge.move(input);
      if (!move) return this.moveNotCorrect();
      return this.moveCorrect();
    });
  }

  moveCorrect() {
    const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    OutputView.printMap(resultBridge);
    if (this.#myBridge.isFinishedGame()) {
      return this.gameWin();
    }
    return this.moveBridge();
  }

  moveNotCorrect() {
    this.#myBridge.gameStateChangeFailure();
    const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    OutputView.printMap(resultBridge);
    return this.getRetryInput();
  }

  getRetryInput() {
    InputView.readGameCommand((input) => {
      const retry = this.#myBridge.retry(input);
      if (retry) {
        this.#myBridge.gameStateChangeSuccess();
        return this.moveBridge();
      }
      return this.quieGame();
    });
  }

  gameWin() {
    Console.print(GAME_MESSAGE.GAME_RESULT);
    OutputView.printMap(resultBridge);
    this.#myBridge.printResultGame(OutputView.printResult);
  }

  quieGame() {
    Console.print(GAME_MESSAGE.GAME_RESULT);
    const resultBridge = this.#myBridge.printMyBridge(makePrintBridge);
    OutputView.printMap(resultBridge);
    this.#myBridge.printResultGame(OutputView.printResult);
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
