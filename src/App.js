const BridgeGame = require("./controller/BridgeGame");
const {
  readBridgeSize,
  readGameCommand,
  readMoving,
} = require("./view/InputView");
const {
  printErrorMessage,
  printGameStart,
  printMap,
  printResult,
} = require("./view/OutputView");
const {
  validateBridgeNumber,
  validateMoveInput,
  validateCommandInput,
} = require("./utils/Validation");
const { LETTER, MESSAGE } = require("./utils/Constant");
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
    const number = Number(input);
    try {
      validateBridgeNumber(number);
      this.#bridgeGame.setBridge(number);
      this.askMoveInput();
    } catch (e) {
      this.askAgainWithError(e, this.askBridgeSize.bind(this));
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
      this.askAgainWithError(e, this.askMoveInput.bind(this));
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
      this.askAgainWithError(e, this.askCommandInput.bind(this));
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

  askAgainWithError(e, itself) {
    printErrorMessage(e);
    itself();
  }

  endGame(finalResult) {
    const { map, trialTime } = this.#bridgeGame.getResult();

    printResult(map, finalResult, trialTime);
    Console.close();
  }
}
new App().play();
module.exports = App;
