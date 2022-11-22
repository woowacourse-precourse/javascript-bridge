const { Console } = require('@woowacourse/mission-utils');
const { INPUT_TEXT, ERROR_TEXT, NUMBER } = require('./Constant');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  start() {
    Console.print(INPUT_TEXT.STRAT);
    this.bridgeCount = NUMBER.INITAIL_BRIDGE;
    this.roundCount = NUMBER.INITAIL_ROUND;
    this.bridgeGame = new BridgeGame(this.bridgeCount);
    this.readBridgeSize();
  },

  readBridgeSize() {
    Console.readLine(INPUT_TEXT.SIZE, (answer) => {
      try {
        this.inputBridgeSizeException(answer);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize();
      }
    });
  },

  inputBridgeSizeException(answer) {
    const ONLY_NUMBER = /^[3-9]{1}$|^[1-2]{1}[0-9]{1}$|^3{1}0{1}$/;
    if (!ONLY_NUMBER.test(answer)) {
      throw ERROR_TEXT.SIZE;
    }
    if (ONLY_NUMBER.test(answer)) {
      return this.bridgeSizetoArr(answer);
    }
  },

  bridgeSizetoArr(number) {
    this.answerArr = BridgeMaker.makeBridge(
      number,
      BridgeRandomNumberGenerator.generate
    );
    this.readMoving(this.answerArr);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_TEXT.MOVEMENT, (answer) => {
      try {
        this.readMovingException(answer);
      } catch (err) {
        Console.print(err);
        this.readMoving();
      }
    });
  },

  readMovingException(letter) {
    const LimitedMovement = /[UD]/;
    if (!LimitedMovement.test(letter)) {
      throw ERROR_TEXT.MOVEMENT;
    }
    if (LimitedMovement.test(letter)) {
      this.letter = letter;
      this.inputtoMove();
    }
  },

  inputtoMove() {
    const Boolean = this.bridgeGame.move(this.answerArr, this.letter);
    this.printMapBasedOnInput(Boolean);
  },

  printMapBasedOnInput(Boolean) {
    OutputView.printMap(this.letter, this.bridgeCount, this.bridgeGame);
    this.bridgeCount++;
    if (Boolean) {
      return this.isGameDone();
    }
    if (!Boolean) {
      return this.printMapWhenLose();
    }
  },

  printMapWhenLose() {
    OutputView.printResult(this.bridgeGame);
    this.readGameCommand();
  },

  isGameDone() {
    if (this.bridgeCount === this.answerArr.length) {
      OutputView.printResult(this.bridgeGame);
      OutputView.printTotalResult(true, this.roundCount);
    }
    if (this.bridgeCount !== this.answerArr.length) {
      this.readMoving(this.answerArr);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_TEXT.QUIT_OR_RETRY, (answer) => {
      try {
        this.readGameCommandException(answer);
      } catch (err) {
        Console.print(err);
        this.readGameCommand();
      }
    });
  },

  readGameCommandException(finishLetter) {
    const LimitedMovement = /[RQ]/;
    if (!LimitedMovement.test(finishLetter)) {
      throw ERROR_TEXT.QUIT_OR_RETRY;
    }
    if (LimitedMovement.test(finishLetter)) {
      return this.finishorRestartGame(finishLetter);
    }
  },

  finishorRestartGame(finishLetter) {
    if (finishLetter === 'Q') {
      return this.finishGameWithLose();
    }
    if (finishLetter === 'R') {
      this.roundCount++;
      this.resetOutputBridge();
      return this.readMoving(this.answerArr);
    }
  },

  finishGameWithLose() {
    OutputView.printResult(this.bridgeGame);
    OutputView.printTotalResult(false, this.roundCount);
  },

  resetOutputBridge() {
    this.bridgeCount = NUMBER.INITAIL_BRIDGE;
    this.bridgeGame.retry();
  },
};
module.exports = InputView;
