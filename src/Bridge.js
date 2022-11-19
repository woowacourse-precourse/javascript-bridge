const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { GAME_CONSTANTS } = require('./utils/constants');
const BridgeMap = require('./BridgeMap');

class Bridge {
  #tryCount;

  constructor () {
    this.bridgeMap = new BridgeMap();
    this.#tryCount = 1;
  }

  createPattern (moveGame) {
    OutputView.printStart();
    InputView.readBridgeSize(moveGame, this.bridgeMap, BridgeMaker.makeBridge);
  }

  askNextStep (retryGame) {
    InputView.readMoving(retryGame, this.moveMap.bind(this));
  }

  moveMap (retryGame, chooseStep) {
    if (this.bridgeMap.checkPath(chooseStep)) {
      OutputView.printMap(this.bridgeMap.record(chooseStep));
      return retryGame();
    }
    OutputView.printMap(this.bridgeMap.record(chooseStep));
    if (this.bridgeMap.isEndGame()) {
      return console.log('게임 종료');
    }
    this.askNextStep(retryGame);
  }
}

module.exports = Bridge;
