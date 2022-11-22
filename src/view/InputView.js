const { Console } = require('@woowacourse/mission-utils');
const BridgeDirection = require('../domain/bridge/BridgeDirection');
const BridgeSize = require('../domain/bridge/BridgeSize');
const GameCommand = require('../domain/GameCommand');

const InputView = {
  message(type) {
    return {
      INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
      INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      INPUT_GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    }[type] ?? new Error('[ERROR] 존재하지 않는 타입입니다.');
  },

  retry(error, read, callback) {
    Console.print(error.message);
    read(callback);
  },

  readBridgeSize(callback) {
    Console.readLine(InputView.message('INPUT_BRIDGE_SIZE'), (size) => {
      try {
        BridgeSize.validate(size);
        callback(size);
      } catch (error) {
        InputView.retry(error, InputView.readBridgeSize, callback);
      }
    });
  },

  readMoving(callback) {
    Console.readLine(InputView.message('INPUT_MOVING'), (direction) => {
      try {
        BridgeDirection.validate(direction);
        callback(direction);
      } catch (error) {
        InputView.retry(error, InputView.readMoving, callback);
      }
    });
  },

  readGameCommand(callback) {
    Console.readLine(InputView.message('INPUT_GAME_COMMAND'), (answer) => {
      try {
        GameCommand.validate(answer);
        callback(answer);
      } catch (error) {
        InputView.retry(error, InputView.readGameCommand, callback);
      }
    });
  },
};

module.exports = InputView;
