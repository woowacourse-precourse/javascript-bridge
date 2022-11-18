const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, LETTER, MESSAGE } = require("./constant");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

const InputView = {
  setMethods(setBridge, move, retry) {
    this.setBridge = setBridge;
    this.move = move;
    this.retry = retry;
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.numberOfBridge, (number) => {
      try {
        Validation.checkBridgeNumber(Number(number));
        this.setBridge(Number(number));
        this.readMoving();
      } catch (e) {
        this.tryAgain(e, this.readBridgeSize);
      }
    });
  },

  tryAgain(e, itself) {
    OutputView.printErrorMessage(e);
    itself();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.chooseUpOrDown, (input) => {
      const letter = input.toUpperCase();
      try {
        Validation.checkUorD(letter);
        const { isCorrect, map, isGameOver, trialTime } = this.move(letter);
        OutputView.printMap(map);
        this.nextAction({ isCorrect, map, isGameOver, trialTime });
      } catch (e) {
        this.tryAgain(e, this.readMoving);
      }
    });
  },

  nextAction({ isCorrect, map, isGameOver, trialTime }) {
    if (isGameOver && isCorrect) {
      this.endGame(map, MESSAGE.win, trialTime);
      return;
    }

    if (isCorrect) {
      this.readMoving();
    } else {
      this.readGameCommand({ map, trialTime });
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand({ map, trialTime }) {
    Console.readLine(INPUT_MESSAGE.chooseToRetry, (input) => {
      const letter = input.toUpperCase();
      try {
        Validation.checkRorQ(letter);
        this.chooseToRetry(letter, { map, trialTime });
      } catch (e) {
        this.tryAgain(e, this.readGameCommand);
      }
    });
  },

  chooseToRetry(letter, { map, trialTime }) {
    if (letter === LETTER.retry) {
      this.retry();
      this.readMoving();
    }

    if (letter === LETTER.quit) {
      this.endGame(map, MESSAGE.lose, trialTime);
    }
  },

  endGame(map, result, trialTime) {
    OutputView.printResult(map, result, trialTime);
    Console.close();
  },
};

module.exports = InputView;
