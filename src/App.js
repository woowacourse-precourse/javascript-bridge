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
      InputView.readMoving(this.actWithUserStepInput.bind(this));
    } catch (e) {
      OutputView.printErrorMessage(e);
    }
  }

  actWithUserStepInput(input) {
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
      InputView.readMoving(this.actWithUserStepInput.bind(this));
    } else {
      InputView.readGameCommand(this.actWithUserRetryInput.bind(this));
    }
  }

  actWithUserRetryInput(input) {
    const letter = input.toUpperCase();
    try {
      Validation.checkRorQ(letter);
      this.chooseToRetry(letter);
    } catch (e) {
      OutputView.printErrorMessage(e);
    }
  }

  chooseToRetry(letter) {
    if (letter === LETTER.retry) {
      this.#bridgeGame.retry();
      InputView.readMoving(this.actWithUserStepInput.bind(this));
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

module.exports = App;
