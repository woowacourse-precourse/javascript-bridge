const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { ERROR, GAME } = require('../util/Message');
const { checkInteger, checkRange } = require('../util/Validation');
const BridgeGame = require('../BridgeGame');

class BridgeHq {
  #bridgeSize;

  startGame() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.validBridgeSize.bind(this));
  }

  validBridgeSize(size) {
    if (checkInteger(size) && checkRange(size)) {
      this.#bridgeSize = Number(size);
      return this.makeBridge();
    }
    OutputView.printError(ERROR.LENGTH);
    this.getBridgeSize();
  }

  makeBridge() {
    const bridge = BridgeMaker.makeBridge(this.#bridgeSize, generate);
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
      return this.getMoveResult();
    }
    OutputView.printError(ERROR.MOVE);
    this.inputMove();
  }

  getMoveResult() {
    const currentMoveResult = this.game.judgmentCommand();
    if (currentMoveResult.up.length === this.#bridgeSize) {
      this.printCurrentMap(currentMoveResult);
      return this.endGame(currentMoveResult);
    }
    if (this.isMatch(currentMoveResult)) {
      this.printCurrentMap(currentMoveResult);
      return this.inputMove();
    }
    this.printCurrentMap(currentMoveResult);
    return this.retryGame();
  }

  endGame(currentMoveResult) {
    if (this.isMatch(currentMoveResult)) {
      return this.successEndGame(currentMoveResult);
    }
    this.lastMap = currentMoveResult;
    return this.retryGame();
  }

  isMatch(currentMoveResult) {
    const lastUpCommand = currentMoveResult.up.slice(-1)[0];
    const lastDownCommand = currentMoveResult.down.slice(-1)[0];
    if (lastUpCommand === GAME.MISMATCH || lastDownCommand === GAME.MISMATCH) {
      return false;
    }
    return true;
  }

  printCurrentMap(currentMap) {
    const [upsideMap, downsideMap] = [...this.makeSideMap(currentMap)];
    OutputView.printMap(upsideMap, downsideMap);
  }

  makeSideMap(map) {
    const upsideMap = `[ ${map.up.join(' | ')} ]`;
    const downsideMap = `[ ${map.down.join(' | ')} ]`;
    return [upsideMap, downsideMap];
  }

  retryGame() {
    InputView.readGameCommand(this.processRetryCommand.bind(this));
  }

  processRetryCommand(command) {
    if (command === GAME.RETRY_COMMAND) {
      this.game.retry();
      this.inputMove();
    }
    if (command === GAME.QUIT_COMMAND) {
      this.failEndGame();
    }
  }
  successEndGame(endMap) {
    const [upsideMap, downsideMap] = [...this.makeSideMap(endMap)];
    const count = this.game.getTryCount();
    OutputView.printResult(upsideMap, downsideMap, count);
  }
  failEndGame() {
    const [upsideMap, downsideMap] = [...this.makeSideMap(this.lastMap)];
    const count = this.game.getTryCount();
    OutputView.printFailResult(upsideMap, downsideMap, count);
  }
}
module.exports = BridgeHq;
