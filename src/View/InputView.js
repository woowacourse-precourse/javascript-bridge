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

  setGame(game) {
    this.game = game;
    this.readBridgeSize();
  },

  setBridge(length) {
    this.game.bridge = BridgeMaker.makeBridge(
      +length,
      BridgeRandomNumberGenerator.generate
    );
  },

  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      try {
        isValidateBridgeSize(length);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize();
      }
      this.setBridge(length);
      this.readMoving();
    });
  },

  move(direction) {
    this.game.move(direction);
    OutputView.showMap(this.game);
    if (this.game.isEnd) OutputView.showResult(this.game);
    else if (this.game.isSuccess) this.readMoving();
    else this.readGameCommand();
  },

  readMoving() {
    Console.readLine(
      '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (direction) => {
        try {
          isValidateDirection(direction);
        } catch (error) {
          Console.print(error);
          this.readMoving();
        }
        this.move(direction);
      }
    );
  },

  excuteCommand(command) {
    if (command === 'R') {
      this.game.retry();
      this.readMoving();
    } else {
      OutputView.showResult(this.game);
      Console.close();
    }
  },

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
        this.excuteCommand(answer);
      }
    );
  },
};

module.exports = InputView;
