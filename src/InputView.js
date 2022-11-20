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
    if (answer < 3 || answer > 21) {
      throw '[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.';
    } else this.bridgeSizetoArr(answer);
  },

  bridgeSizetoArr(number) {
    this.answerArr = BridgeMaker.makeBridge(
      number,
      BridgeRandomNumberGenerator.generate
    );
    return this.readMoving();
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
      return this.isGameDone();
    }
    if (!Boolean) {
      OutputView.printMap(Boolean, this.letter);
      this.count++;
      return OutputView.printResult();
    }
  },

  isGameDone() {
    if (this.count === this.answerArr.length) {
      return OutputView.printResult();
    }
    if (this.count !== this.answerArr.length) {
      return this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};
module.exports = InputView;
