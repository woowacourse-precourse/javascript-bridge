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
    OutputView.printMap(this.bridgeMap.getPathHistory(chooseStep));
    if (!this.bridgeMap.checkPath(chooseStep)) {
      return retryGame();
    }
    if (this.bridgeMap.isEndGame()) {
      return console.log('게임 종료');
    }
    this.bridgeMap.increaseDistance();
    this.askNextStep(retryGame);
  }
}

module.exports = Bridge;
