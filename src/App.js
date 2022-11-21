const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { STATE } = require('./Constant');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    this.flowController(STATE.START);
  }

  startGame(input) {
    this.bridge = makeBridge(input, generate);
    this.bridgeGame = new BridgeGame(this.bridge);
    this.flowController(this.bridgeGame.state);
  }

  moveResult(input) {
    const { bridgeGame } = this;

    bridgeGame.move(input);
    bridgeGame.drawMap(input);
    OutputView.printMap(bridgeGame.moveMap);
    this.flowController(bridgeGame.state);
  }

  flowController(state) {
    switch (state) {
      case STATE.START:
        return InputView.readBridgeSize(this.startGame.bind(this));
      case STATE.MOVE:
        return InputView.readMoving(this.moveResult.bind(this));
      case STATE.FAIL:
        return InputView.readGameCommand(this.flowController.bind(this));
      case STATE.RETRY:
        return this.bridgeGame.retry(this.flowController.bind(this));
    }
    OutputView.printResult(this.bridgeGame);
  }
}

module.exports = App;
