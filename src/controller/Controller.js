const { STATE } = require('../constant/Constant');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Controller {
  startGame(input) {
    this.bridge = makeBridge(input, generate);
    this.bridgeGame = new BridgeGame(this.bridge);
    this.flow(this.bridgeGame.state);
  }

  moveResult(input) {
    const { bridgeGame } = this;

    bridgeGame.move(input);
    bridgeGame.drawMap(input);
    OutputView.printMap(bridgeGame.moveMap);
    this.flow(bridgeGame.state);
  }

  flow(state) {
    switch (state) {
      case STATE.START:
        return InputView.readBridgeSize(this.startGame.bind(this));
      case STATE.MOVE:
        return InputView.readMoving(this.moveResult.bind(this));
      case STATE.FAIL:
        return InputView.readGameCommand(this.flow.bind(this));
      case STATE.RETRY:
        return this.bridgeGame.retry(this.flow.bind(this));
    }
    OutputView.printResult(this.bridgeGame);
  }
}

module.exports = Controller;
