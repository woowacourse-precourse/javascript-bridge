const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readMoving, readBridgeSize, readGameCommand } = require('./ui/InputView');

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
    const isPlaying = this.brideGame.move(this.#round, this.#bridgeString, this.#userInputString);
    if (isPlaying) {
      this.#round += 1;
      readMoving(this.check);
    } else {
      this.askRetry();
    }
  };
  askRetry = () => {
    readGameCommand((input) => {
      console.log(input);
    });
  };
}

module.exports = App;

const app = new App();
app.play();
