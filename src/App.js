const BridgeGame = require("./BridgeGame");
const { readBridgeSize, readGameCommand, readMoving } = require("./InputView");
const {
  printErrorMessage,
  printGameStart,
  printMap,
  printResult,
} = require("./OutputView");
const {
  validateBridgeNumber,
  validateMoveInput,
  validateCommandInput,
} = require("./Validation");
const { LETTER, MESSAGE } = require("./constant");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    printGameStart();
    this.askBridgeSize();
  }

  askBridgeSize() {
    readBridgeSize(this.actWithBridgeSize.bind(this));
  }

  actWithBridgeSize(input) {
    try {
      validateBridgeNumber(Number(input));
      this.#bridgeGame.setBridge(Number(input));
      this.askMoveInput();
    } catch (e) {
      this.askAgain(e, this.askBridgeSize);
    }
  }

  askMoveInput() {
    readMoving(this.actWithUserMoveInput.bind(this));
  }

  actWithUserMoveInput(input) {
    const letter = input.toUpperCase();
    try {
      validateMoveInput(letter);
      this.#bridgeGame.move(letter);
      const { map, isCorrect, isGameOver } = this.#bridgeGame.getResult();
      printMap(map);
      this.actWithResult({ isCorrect, isGameOver });
    } catch (e) {
      this.askAgain(e, this.askMoveInput);
    }
  }

  actWithResult({ isCorrect, isGameOver }) {
    if (isGameOver && isCorrect) {
      this.endGame(MESSAGE.win);
      return;
    }

    if (isCorrect) {
      this.askMoveInput();
    } else {
      this.askCommandInput();
    }
  }

  askCommandInput() {
    readGameCommand(this.actWithUserCommandInput.bind(this));
  }

  actWithUserCommandInput(input) {
    const letter = input.toUpperCase();
    try {
      validateCommandInput(letter);
      this.actWithCommand(letter);
    } catch (e) {
      this.askAgain(e, this.askCommandInput);
    }
  }

  actWithCommand(letter) {
    if (letter === LETTER.retry) {
      this.#bridgeGame.retry();
      this.askMoveInput();
    }

    if (letter === LETTER.quit) {
      this.endGame(MESSAGE.lose);
    }
  }

  askAgain(e, itself) {
    printErrorMessage(e);
    itself();
  }

  endGame(result) {
    const { map, trialTime } = this.#bridgeGame.getResult();

    printResult(map, result, trialTime);
    Console.close();
  }
}

module.exports = App;
