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
    InputView.readBridgeSize((input) => {
      this.checkBridgeSize(input);
    });
  }

  checkBridgeSize = (input) => {
    isInvalidBridgeLength(input) && InputView.readBridgeSize();
    this.makeAnswerBridge(input);
  };

  makeAnswerBridge(input) {
    const bridgeSize = toNumber(input);
    const bridge = makeBridge(bridgeSize, generate);
    this.setBridgeGame(new BridgeGame(bridge));
    InputView.readMoving((input) => {
      this.checkMoving(input);
    });
  }

  checkMoving = (input) => {
    if (isInvalidMoving(input)) {
      InputView.readMoving((input) => {
        this.checkMoving(input);
      });
      return;
    }
    this.setMoving(input);
  };

  setMoving(input) {
    this.#bridgeGame.move(input);
    printMap(this.#bridgeGame.getUserState());
    if (this.#bridgeGame.isVictory()) {
      printResult(this.#bridgeGame);
      Console.close();
      return;
    }
    if (this.#bridgeGame.isFinish) {
      InputView.readGameCommand((input) => {
        this.checkGameCommand(input);
      });
      return;
    }
    InputView.readMoving((input) => {
      this.checkMoving(input);
    });
  }

  checkGameCommand = (input) => {
    if (isInvalidGameCommand(input)) {
      InputView.readGameCommand((input) => {
        this.checkGameCommand(input);
      });
      return;
    }
    this.turnOnOffGame(input);
  };

  turnOnOffGame(input) {
    if (input === RESTART_COMMAND) {
      this.#bridgeGame.retry();
      InputView.readMoving((input) => {
        this.checkMoving(input);
      });
      return;
    }
    if (input === QUIT_COMMAND) {
      printResult(this.#bridgeGame);
    }
    Console.close();
  }

  // (input) => {
  //   if (isInvalidGameCommand(input)) {
  //     InputView.readGameCommand(bridgeGame);
  //     return;
  //   }
  //   if (input === RESTART_COMMAND) {
  //     bridgeGame.retry();
  //     InputView.readMoving(bridgeGame);
  //     return;
  //   }
  //   if (input === QUIT_COMMAND) {
  //     printResult(bridgeGame);
  //   }
  //   Console.close();
  // }

  // (input) => {
  //   if (isInvalidMoving(input)) {
  //     InputView.readMoving(bridgeGame);
  //     return;
  //   }
  //   bridgeGame.move(input);
  //   printMap(bridgeGame.getUserState());
  //   if (bridgeGame.isVictory()) {
  //     printResult(bridgeGame);
  //     Console.close();
  //     return;
  //   }
  //   if (bridgeGame.isFinish) {
  //     InputView.readGameCommand(bridgeGame);
  //     return;
  //   }
  //   InputView.readMoving(bridgeGame);
  // }
}

module.exports = Controller;
