const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const {
  isValidateBridgeSize,
  isValidateDirection,
  isValidateCommand,
} = require('../utils/validation');
const OutputView = require('./OutputView');
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

      this.game.bridge = BridgeMaker.makeBridge(
        +length,
        BridgeRandomNumberGenerator.generate
      );
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
        OutputView.printMap();
        if (this.game.isEnd) OutputView.printResult();
        else if (this.game.isSuccess) this.readMoving();
        else this.readGameCommand();
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (answer) => {
        try {
          isValidateCommand(answer);
        } catch (error) {
          Console.print(error);
          this.readGameCommand();
        }

        if (answer === 'R') {
          this.game.retry();
          this.readMoving();
        } else {
          OutputView.printResult();
          Console.close();
        }
      }
    );
  },
};

module.exports = InputView;
