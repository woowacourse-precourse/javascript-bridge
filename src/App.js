const BridgeGame = require("./BridgeGame");
const { readBridgeSize, readGameCommand, readMoving } = require("./InputView");
const {
  printErrorMessage,
  printGameStart,
  printMap,
  printResult,
} = require("./OutputView");
const { checkBridgeNumber, checkRorQ, checkUorD } = require("./Validation");
const { LETTER, MESSAGE } = require("./constant");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    printGameStart();
    readBridgeSize(this.actWithBridgeNumber.bind(this));
  }

  actWithBridgeNumber(number) {
    try {
      checkBridgeNumber(Number(number));
      this.#bridgeGame.setBridge(Number(number));
      readMoving(this.actWithUserMoveInput.bind(this));
    } catch (e) {
      printErrorMessage(e);
      readBridgeSize(this.actWithBridgeNumber.bind(this));
    }
  }

  actWithUserMoveInput(input) {
    const letter = input.toUpperCase();
    try {
      checkUorD(letter);
      const { map, isCorrect, isGameOver } = this.#bridgeGame.move(letter);
      printMap(map);
      this.actWithResult({ isCorrect, isGameOver });
    } catch (e) {
      printErrorMessage(e);
    }
  }

  actWithResult({ isCorrect, isGameOver }) {
    if (isGameOver && isCorrect) {
      this.endGame(MESSAGE.win);
      return;
    }

    if (isCorrect) {
      readMoving(this.actWithUserMoveInput.bind(this));
    } else {
      readGameCommand(this.actWithUserCommandInput.bind(this));
    }
  }

  actWithUserCommandInput(input) {
    const letter = input.toUpperCase();
    try {
      checkRorQ(letter);
      this.actWithCommand(letter);
    } catch (e) {
      printErrorMessage(e);
    }
  }

  actWithCommand(letter) {
    if (letter === LETTER.retry) {
      this.#bridgeGame.retry();
      readMoving(this.actWithUserMoveInput.bind(this));
    }

    if (letter === LETTER.quit) {
      this.endGame(MESSAGE.lose);
    }
  }

  endGame(result) {
    const { map, trialTime } = this.#bridgeGame.getResult();
    printResult(map, result, trialTime);
    Console.close();
  }
}

module.exports = App;
