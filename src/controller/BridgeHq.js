const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { ERROR } = require('../util/Message');
const { checkInteger, checkRange, checkSide } = require('../util/Validation');
const BridgeGame = require('../BridgeGame');

class BridgeHq {
  #commands = [];

  startGame() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.validBridgeSize.bind(this));
  }

  validBridgeSize(size) {
    if (checkInteger(size) && checkRange(size)) {
      return this.makeBridge(size);
    }
    OutputView.printError(ERROR.LENGTH);
    this.getBridgeSize();
  }

  makeBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator);
    console.log(bridge);
    this.game = new BridgeGame(bridge);
    this.inputMove();
  }

  inputMove() {
    InputView.readMoving(this.getMove.bind(this));
  }

  getMove(command) {
    if (this.game.validMoveCommand(command)) {
      this.game.move(command);
      this.getMoveResult();
      return;
    }
    OutputView.printError(ERROR.MOVE);
    this.inputMove();
  }
  getMoveResult() {
    const currentMoveResult = this.game.judgmentCommand();
    if (currentMoveResult) {
      return this.printCurrentMap(currentMoveResult);
    }
    // return this.retryGame();
  }

  printCurrentMap(currentMap) {
    const upsideMap = `[ ${currentMap.up.join(' | ')} ]`;
    const downsideMap = `[ ${currentMap.down.join(' | ')} ]`;
    OutputView.printMap(upsideMap, downsideMap);
    this.inputMove();
  }
}
module.exports = BridgeHq;
