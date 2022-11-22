const MissionUtils = require('@woowacourse/mission-utils');

const MSG = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  BRIDGE_SIZE_ERR: '[ERROR] 다리 길이는 3부터 20 사이의 정수 여야 합니다.\n',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  MOVING_ERR: '[ERROR] 이동할 칸은 U 또는 D 여야 합니다.\n',
  GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_COMMAND_ERR: '[ERROR] 다시 시도할지 여부는 R 또는 Q 여야 합니다.\n',
};

const InputView = {
  readBridgeSize(setBridgeSize) {
    MissionUtils.Console.readLine(MSG.BRIDGE_SIZE, (input) => {
      try {
        this.validateBridgeSize(input);
      } catch (e) {
        MissionUtils.Console.print(e);
        this.readBridgeSize(setBridgeSize);
      }
      setBridgeSize(input);
    });
  },
  validateBridgeSize(input) {
    const inputNum = Number(input);
    if (
      isNaN(inputNum) ||
      !Number.isInteger(inputNum) ||
      inputNum < 3 ||
      inputNum > 20
    ) {
      throw new Error(MSG.BRIDGE_SIZE_ERR);
    }
  },

  readMoving(setMove) {
    MissionUtils.Console.readLine(MSG.MOVING, (input) => {
      try {
        this.validateMoving(input);
        setMove(input);
      } catch (e) {
        MissionUtils.Console.print(e);
        this.readMoving(setMove);
      }
    });
  },
  validateMoving(input) {
    if (input !== 'U' && input !== 'D') {
      throw new Error(MSG.MOVING_ERR);
    }
  },

  readGameCommand(setGameCommand) {
    MissionUtils.Console.readLine(MSG.GAME_COMMAND, (input) => {
      try {
        this.validateGameCommand(input);
        setGameCommand(input);
      } catch (e) {
        MissionUtils.Console.print(e);
        this.readGameCommand(setGameCommand);
      }
    });
  },
  validateGameCommand(input) {
    if (input !== 'R' && input !== 'Q') {
      throw new Error(MSG.GAME_COMMAND_ERR);
    }
  },
};

module.exports = InputView;
