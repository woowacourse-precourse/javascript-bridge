const inputView = require('./InputView');
const outputView = require('./OutputView');
const { BRIDGE } = require('../constants/game.constants');
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
      this.makeAndSaveBridge(length);
      this.moveBrige(this);
    } catch (error) {
      outputView.printError(error);
      this.maker();
    }
  }

  moveBrige (controller) {
    if (
      this.#bridgeGame.getMoveIndex() !== this.#bridgeGame.getBridge().length
    ) {
      inputView.readMoving(this.handleMoveBridge.bind(this));
    } else {
      outputView.printResult(
        true,
        `${this.getPrintList(
          this.#bridgeGame.getUpList(),
        )}\n${this.getPrintList(this.#bridgeGame.getDownList())}`,
        this.#bridgeGame.getTryCount(),
      );
    }
  }

  drawBridgeMap (string) {
    this.#bridgeGame.move(string);
    this.setMapArray(this.sameBridge(this.#bridgeGame.getMoveIndex()), string);
    outputView.printMap(
      `${this.getPrintList(this.#bridgeGame.getUpList())}\n${this.getPrintList(
        this.#bridgeGame.getDownList(),
      )}`,
    );
  }

  handleMoveInput (string) {
    if (
      this.#bridgeGame.getBridge()[this.#bridgeGame.getMoveIndex()] === string
    ) {
      this.#bridgeGame.incrementMoveIndex();
      return this.moveBrige(this);
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

  setMapArray (sameResult, string) {
    if (string === BRIDGE.UP && sameResult) {
      this.#bridgeGame.getUpList().push(sameResult);
      this.#bridgeGame.getDownList().push(' ');
    }
    if (string === BRIDGE.DOWN && sameResult) {
      this.#bridgeGame.getUpList().push(' ');
      this.#bridgeGame.getDownList().push(sameResult);
    }
  }

  getPrintList (list) {
    return `${BRIDGE.START} ${list.join(BRIDGE.DIVISION)} ${BRIDGE.END}`;
  }

  askRetryGame () {
    inputView.readGameCommand(this.handleAskRetry.bind(this));
  }

  inputRetry (string) {
    if (string === 'R') {
      this.#bridgeGame.setList();
      this.moveBrige(this);
      this.#bridgeGame.retry();
    }
  }

  inputQuit (string) {
    if (string === 'Q') outputView.printResult(
      false,
      `${this.getPrintList(this.#bridgeGame.getUpList())}
      \n${this.getPrintList(this.#bridgeGame.getDownList())}`,
      this.#bridgeGame.getTryCount(),
    );
  }

  handleAskRetry (string) {
    try {
      InputValidator.isRestartQuit(string);
      this.inputRetry(string);
      this.inputQuit(string);
    } catch (error) {
      outputView.printError(error);
      this.askRetryGame();
    }
  }
}

module.exports = Controller;
