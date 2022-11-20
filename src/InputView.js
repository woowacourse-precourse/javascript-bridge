const { Console } = require('@woowacourse/mission-utils');
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
    this.count = 0;
    this.roundCount = 1;
    this.bridgeGame = new BridgeGame();
    this.readBridgeSize();
  },

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
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
      throw '[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.';
    } else this.bridgeSizetoArr(answer);
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
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (answer) => {
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
      throw '[ERROR] 대문자 U 와 D 를 입력해주세요.';
    } else {
      this.letter = letter;
      this.inputtoMove();
    }
  },

  inputtoMove() {
    const Boolean = this.bridgeGame.move(this.answerArr, this.letter);
    this.printMapBasedOnInput(Boolean);
  },

  printMapBasedOnInput(Boolean) {
    if (Boolean) {
      OutputView.printMap(Boolean, this.letter);
      this.count++;
      this.isGameDone();
    }
    if (!Boolean) {
      OutputView.printMap(Boolean, this.letter);
      this.count++;
      OutputView.printResult();
      this.readGameCommand();
    }
  },

  isGameDone() {
    if (this.count === this.answerArr.length) {
      OutputView.printResult();
      OutputView.printWinResult(this.count, this.roundCount, this.answerArr);
    }
    if (this.count !== this.answerArr.length) {
      this.readMoving(this.answerArr);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요', (answer) => {
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
      throw '[ERROR] 대문자 R 과 Q 를 입력해주세요.';
    } else {
      this.finishorRestartGame(finishLetter);
    }
  },

  finishorRestartGame(finishLetter) {
    if (finishLetter === 'Q') {
      return this.finishGame();
    }
    if (finishLetter === 'R') {
      this.roundCount++;
      this.resetOutputBridge();
      return this.readMoving(this.answerArr);
    }
  },

  finishGame() {
    OutputView.printResult();
    OutputView.printLoseResult(this.count, this.roundCount, this.answerArr);
  },

  resetOutputBridge() {
    this.count = 0;
    this.bridgeGame.retry();
    OutputView.resetOutputBridge();
  },
};
module.exports = InputView;
