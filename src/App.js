const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { RETRY } = require('./constant/constants');
const { readMoving, readBridgeSize, readGameCommand } = require('./ui/InputView');
const { printMap, printResult } = require('./ui/OutputView');

class App {
  #bridgeString;
  #userInputString;
  #try;
  #round;

  constructor() {
    this.#bridgeString = '';
    this.#userInputString = '';
    this.#try = 0;
    this.#round = 0;
    this.brideGame = new BridgeGame();
  }

  play() {
    readBridgeSize(this.bridgeSetting);
  }

  bridgeSetting = (input) => {
    this.#bridgeString = makeBridge(input, generate);
    readMoving(this.check);
  };

  check = (input) => {
    //bridgeString과 현재 단계의 input에 따라서 결과 리턴
    this.#userInputString += input;
    console.log(
      `round : ${this.#round}, bridge: ${this.#bridgeString}, userInput : ${this.#userInputString}`
    );
    const { upperBridge, lowerBridge, status } = this.brideGame.move(
      this.#round,
      this.#bridgeString,
      this.#userInputString
    );
    printMap(upperBridge, lowerBridge);
    this.doAfterCheck(status);
  };

  doAfterCheck = (status) => {
    switch (status) {
      case 'success':
        this.#round += 1;
        readMoving(this.check);
        break;
      case 'fail':
        this.askRetry();
        break;
      case 'finish':
        //TODO 총 시도 횟수, 성공 여부 보여주기
        break;
    }
  };
  askRetry = () => {
    readGameCommand((input) => {
      if (input === RETRY) {
        this.#round = 0;
        this.#try += 1;
        this.#userInputString = '';
        this.brideGame.retry();
        readMoving(this.check);
      } else {
        printResult();
      }
    });
  };
}

module.exports = App;

const app = new App();
app.play();
