// InputView의 파일 경로는 변경할 수 있다.
// InputView의 메서드의 인자는 변경할 수 있다.
// 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const {
  isValidateBridgeSize,
  isValidateDirection,
} = require('../utils/validation');
const InputView = {
  game: null,

  playGame() {
    this.readBridgeSize();
  },

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      try {
        isValidateBridgeSize(length);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize();
      }

      BridgeMaker.makeBridge(+length, BridgeRandomNumberGenerator.generate);
      this.readMoving();
    });
  },

  readMoving() {
    Console.readLine(
      '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (move) => {
        try {
          isValidateDirection(move);
        } catch (error) {
          Console.print(error);
          this.readMoving();
        }

        this.game.move(move);
        if (!this.game.isEnd) this.readMoving();
        this.readGameCommand();
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
