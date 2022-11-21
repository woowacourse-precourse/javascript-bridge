const { Console } = require("@woowacourse/mission-utils");

const { printStart, printMap, printResult } = require("./OutputView");
const InputView = require("./InputView");
const { isInvalidBridgeLength, isInvalidMoving, isInvalidGameCommand } = require("./exception");
const { generate } = require("./BridgeRandomNumberGenerator");
const { toNumber } = require("./helpers/common");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { RESTART_COMMAND, QUIT_COMMAND } = require("./constant");

class Controller {
  #bridgeGame;

  setBridgeGame(bridgeGame) {
    this.#bridgeGame = bridgeGame;
  }

  start() {
    printStart();
    this.readSize();
  }

  readSize() {
    InputView.readBridgeSize((size) => {
      this.checkBridgeSize(size);
    });
  }

  checkBridgeSize = (size) => {
    isInvalidBridgeLength(size) && this.readSize();
    this.makeAnswerBridge(size);
  };

  makeAnswerBridge(size) {
    const bridgeSize = toNumber(size);
    const bridge = makeBridge(bridgeSize, generate);
    this.setBridgeGame(new BridgeGame(bridge));
    this.readMove();
  }

  readMove() {
    InputView.readMoving((moveCommand) => {
      this.checkMoving(moveCommand);
    });
  }

  checkMoving = (moveCommand) => {
    if (isInvalidMoving(moveCommand)) {
      this.readMove();
      return;
    }
    this.setMoving(moveCommand);
  };

  setMoving(moveCommand) {
    this.#bridgeGame.move(moveCommand);
    printMap(this.#bridgeGame.getUserState());
    if (this.#bridgeGame.isVictory()) this.endGame();
    if (this.#bridgeGame.isLoss()) this.readCommand();
    this.readMove();
  }

  endGame() {
    printResult(this.#bridgeGame);
    Console.close();
  }

  readCommand() {
    InputView.readGameCommand((command) => {
      this.checkGameCommand(command);
    });
  }

  checkGameCommand = (command) => {
    if (isInvalidGameCommand(command)) {
      this.readCommand();
      return;
    }
    this.decideContinue(command);
  };

  decideContinue(command) {
    if (command === RESTART_COMMAND) {
      this.#bridgeGame.retry();
      this.readMove();
      return;
    }
    if (command === QUIT_COMMAND) {
      this.endGame();
    }
  }
}

module.exports = Controller;
