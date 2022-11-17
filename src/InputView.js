const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { INPUT_MESSAGE, LETTER, MESSAGE } = require("./constant");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge, move, retry) {
    this.setMethods(setBridge, move, retry);
    Console.readLine(INPUT_MESSAGE.numberOfBridge, (number) => {
      try {
        Validation.checkBridgeNumber(Number(number));
        const bridge = BridgeMaker.makeBridge(
          Number(number),
          BridgeRandomNumberGenerator.generate
        );
        this.setBridge(bridge);
        this.readMoving();
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(setBridge, move, retry);
      }
    });
  },

  setMethods(setBridge, move, retry) {
    this.setBridge = setBridge;
    this.move = move;
    this.retry = retry;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.chooseUpOrDown, (input) => {
      const letter = input.toUpperCase();
      try {
        Validation.checkUorD(letter);
        const { correct, map, gameOver, trialTime } = this.move(letter);
        OutputView.printMap(map);
        this.nextAction({ correct, map, gameOver, trialTime });
      } catch (e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  nextAction({ correct, map, gameOver, trialTime }) {
    if (gameOver && correct) {
      this.endGame(map, MESSAGE.win, trialTime);
      return;
    }

    if (correct) {
      this.readMoving();
    }

    if (!correct) {
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
        Console.print(e);
        this.readGameCommand({ map, trialTime });
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
