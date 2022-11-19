const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");
const { LETTER, MESSAGE } = require("./constant");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.actWithBridgeNumber.bind(this));
  }

  actWithBridgeNumber(number) {
    try {
      Validation.checkBridgeNumber(Number(number));
      this.#bridgeGame.setBridge(Number(number));
      InputView.readMoving(this.actWithUserMoveInput.bind(this));
    } catch (e) {
      OutputView.printErrorMessage(e);
    }
  }

  actWithUserMoveInput(input) {
    const letter = input.toUpperCase();
    try {
      Validation.checkUorD(letter);
      const { isCorrect, map, isGameOver } = this.#bridgeGame.move(letter);
      OutputView.printMap(map);
      this.nextAction({ isCorrect, map, isGameOver });
    } catch (e) {
      OutputView.printErrorMessage(e);
    }
  }

  nextAction({ isCorrect, isGameOver }) {
    if (isGameOver && isCorrect) {
      this.endGame(MESSAGE.win);
      return;
    }

    if (isCorrect) {
      InputView.readMoving(this.actWithUserMoveInput.bind(this));
    } else {
      InputView.readGameCommand(this.actWithUserCommandInput.bind(this));
    }
  }

  actWithUserCommandInput(input) {
    const letter = input.toUpperCase();
    try {
      Validation.checkRorQ(letter);
      this.actWithCommand(letter);
    } catch (e) {
      OutputView.printErrorMessage(e);
    }
  }

  actWithCommand(letter) {
    if (letter === LETTER.retry) {
      this.#bridgeGame.retry();
      InputView.readMoving(this.actWithUserMoveInput.bind(this));
    }

    if (letter === LETTER.quit) {
      this.endGame(MESSAGE.lose);
    }
  }

  endGame(result) {
    const { map, trialTime } = this.#bridgeGame.getResult();
    OutputView.printResult(map, result, trialTime);
    Console.close();
  }
}

new App().play();
module.exports = App;
