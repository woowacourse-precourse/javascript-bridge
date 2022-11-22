const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');

class App {
  #bridgeGame;
  #bridge;
  #userState;
  #countTry;

  constructor() {
    this.handleBridgeSize = this.handleBridgeSize.bind(this);
    this.handleBridgeMoveing = this.handleBridgeMoveing.bind(this);
    this.handleGameCommand = this.handleGameCommand.bind(this);
  }

  play() {
    OutputView.outputGameStart();
    InputView.readBridgeSize(this.handleBridgeSize);
  }

  handleBridgeSize(size) {
    try {
      this.#bridgeGame = new BridgeGame(size);
      InputView.readMoving(this.handleBridgeMoveing);
    } catch (error) {
      OutputView.printError(error);
      InputView.readBridgeSize(this.handleBridgeSize);
    }
  }

  handleBridgeMoveing(und) {
    try {
      const [condition, bridge, userState, countTry] =
        this.#bridgeGame.move(und);
      OutputView.printMap(bridge, userState);
      [this.#bridge, this.#userState, this.#countTry] = [
        bridge,
        userState,
        countTry,
      ];
      this.next(condition);
    } catch (error) {
      OutputView.printError(error);
      InputView.readMoving(this.handleBridgeMoveing);
    }
  }

  next(condition) {
    if (condition === 0) {
      OutputView.printResult(
        this.#bridge,
        this.#userState,
        this.#countTry,
        true
      );
      InputView.close();
    } else if (condition === 1) {
      InputView.readMoving(this.handleBridgeMoveing);
    } else if (condition === 2) {
      InputView.readGameCommand(this.handleGameCommand);
    }
  }

  handleGameCommand(rnq) {
    if (rnq === 'R') {
      this.#bridgeGame.retry();
      InputView.readMoving(this.handleBridgeMoveing);
    } else if (rnq === 'Q') {
      OutputView.printResult(
        this.#bridge,
        this.#userState,
        this.#countTry,
        false
      );
      InputView.close();
    } else {
      throw Error('[ERROR] 대문자 R , Q 둘 중 하나만 입력해주세요.');
    }
  }
}

const app = new App();
app.play();
module.exports = App;
