const inputView = require('./InputView');
const outputView = require('./OutputView');
const { BRIDGE, INPUT_MESSAGE } = require('../constants/game.constants');
const InputValidator = require('../validators/InputValidator');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class Controller {
  #bridgeGame;

  constructor () {
    this.#bridgeGame = new BridgeGame();
  }

  maker () {
    inputView.readBridgeSize(this.handleBridgeLength.bind(this));
  }

  makeAndSaveBridge (length) {
    const bridge = makeBridge(length, generate);
    this.#bridgeGame.setBridge(bridge);
  }

  handleBridgeLength (length) {
    try {
      InputValidator.isRightBridgeLength(length);
      outputView.printBlankLine();
      this.makeAndSaveBridge(length);
      this.moveBrige();
    } catch (error) {
      outputView.printError(error);
      this.maker();
    }
  }

  getUpDownTotalPrintList () {
    return `${this.getPrintList(
      this.#bridgeGame.getUpList(),
    )}\n${this.getPrintList(this.#bridgeGame.getDownList())}`;
  }

  outputResultPrint () {
    outputView.printResult(
      true,
      this.getUpDownTotalPrintList(),
      this.#bridgeGame.getTryCount(),
    );
  }

  moveBrige () {
    if (this.#bridgeGame.getMoveIndex() !== this.#bridgeGame.getBridge().length) {
      inputView.readMoving(this.handleMoveBridge.bind(this));
    } else {
      this.outputResultPrint();
    }
  }

  drawBridgeMap (string) {
    this.#bridgeGame.move(string);
    this.setUpArray(this.sameBridge(this.#bridgeGame.getMoveIndex()), string);
    this.setDownArray(this.sameBridge(this.#bridgeGame.getMoveIndex()), string);
    outputView.printMap(
      this.getUpDownTotalPrintList(),
    );
  }

  handleMoveInput (string) {
    if (this.#bridgeGame.getBridge()[this.#bridgeGame.getMoveIndex()] === string) {
      this.#bridgeGame.incrementMoveIndex();
      return this.moveBrige();
    }
    this.askRetryGame(this);
  }

  handleMoveBridge (string) {
    try {
      InputValidator.isUpDown(string);
      this.drawBridgeMap(string);
      this.handleMoveInput(string);
    } catch (error) {
      outputView.printError(error);
      this.moveBrige(this);
    }
  }

  sameBridge (idx) {
    return this.#bridgeGame.getBridge()[idx]
    === this.#bridgeGame.getInputUpDown()
      ? BRIDGE.ABLE
      : BRIDGE.UNABLE;
  }

  setUpArray (marker, string) { 
    this.#bridgeGame.setUpList(string === BRIDGE.UP?marker:' ');
  }

  setDownArray (marker, string) {
    this.#bridgeGame.setDownList(string === BRIDGE.DOWN?marker:' ');
  }

  getPrintList (list) {
    return `${BRIDGE.START} ${list.join(BRIDGE.DIVISION)} ${BRIDGE.END}`;
  }

  askRetryGame () {
    inputView.readGameCommand(this.handleAskRetry.bind(this));
  }

  inputRetryOrQuit (string) {
    if (string === INPUT_MESSAGE.RETRY) {
      this.#bridgeGame.setList();
      this.moveBrige();
      this.#bridgeGame.retry();
    }
    this.inputQuit(string);
  }

  inputQuit (string) {
    if (string === INPUT_MESSAGE.QUIT) outputView.printResult(
      false,
      this.getUpDownTotalPrintList(),
      this.#bridgeGame.getTryCount(),
    );
  }

  handleAskRetry (string) {
    try {
      InputValidator.isRestartQuit(string);
      this.inputRetryOrQuit(string);
    } catch (error) {
      outputView.printError(error);
      this.askRetryGame();
    }
  }
}

module.exports = Controller;
