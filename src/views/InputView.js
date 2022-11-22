const { Console } = require('@woowacourse/mission-utils');
const { GAME_COMMAND } = require('../utils/constants');

const {
  validMoveInput,
  validGameCommand,
  validBridgeSizeInput,
} = require('../utils/validation');

const InputView = {
  readBridgeSize(callback) {
    this.readLine(
      '다리의 길이를 입력해주세요.',
      (answer) => {
        const bridgeSize = Number.parseInt(answer, 10);
        Console.print('\n');
        callback(bridgeSize);
      },
      validBridgeSizeInput,
    );
  },

  readMoving(callback) {
    this.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      (answer) => {
        callback(answer);
      },
      validMoveInput,
    );
  },

  readGameCommand(callback) {
    this.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
      (answer) => {
        const isRetry = GAME_COMMAND.RETRY === answer;
        callback(isRetry);
      },
      validGameCommand,
    );
  },

  readLine(msg, callback, validation) {
    Console.readLine(`${msg}\n`, (answer) => {
      try {
        validation(answer);
        callback(answer);
      } catch (error) {
        Console.print(error.message);
        this.readLine(msg, callback, validation);
      }
    });
  },
};

module.exports = InputView;
