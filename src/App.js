const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_MESSAGE } = require('./constants/constants');
const makePrintBridge = require('./utils/makePrintBridge');
const { printResult, printMap } = require('./UI/OutputView');
const {
  readBridgeSize,
  readMoving,
  readGameCommand,
} = require('./UI/InputView');
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
  }
}

const app = new App();
app.play();
module.exports = App;
