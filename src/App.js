const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  constructor() {
    this.handleBridgeSize = this.handleBridgeSize.bind(this);
    this.handleBridgeMoveing = this.handleBridgeMoveing.bind(this);
    this.handleGameCommand = this.handleGameCommand.bind(this);
    this.bridge;
    this.userState;
    this.countTry;
  }

  play() {
    OutputView.outputGameStart();
    InputView.readBridgeSize(this.handleBridgeSize);
  }

  handleBridgeSize(size) {
    this.bridgeGame = new BridgeGame(size);
    InputView.readMoving(this.handleBridgeMoveing);
  }

  handleBridgeMoveing(und) {
    const [condition, bridge, userState, countTry] = this.bridgeGame.move(und);

    OutputView.printMap(bridge, userState);

    if (condition === 0) {
      OutputView.printResult(bridge, userState, countTry, true);
      InputView.close();
    } else if (condition === 1) {
      InputView.readMoving(this.handleBridgeMoveing);
    } else if (condition === 2) {
      InputView.readGameCommand(this.handleGameCommand);
    }

    this.bridge = bridge;
    this.userState = userState;
    this.countTry = countTry;
  }

  handleGameCommand(rnq) {
    if (rnq === 'R') {
      this.bridgeGame.retry();
      InputView.readMoving(this.handleBridgeMoveing);
    } else if (rnq === 'Q') {
      OutputView.printResult(this.bridge, this.userState, this.countTry, false);
      InputView.close();
    }
  }
}

const app = new App();
app.play();
module.exports = App;
