const MissionUtils = require("@woowacourse/mission-utils");

const { VALID_FLAG, GAME_COMMAND, ERROR_MESSAGE } = require("./Constant");

const ValidCheck = {
  /**
   * 다리 길이가 유효한 값인지 검사한다.
   */
  validateBridgeSize(bridgeSize) {
    if (bridgeSize === undefined) {
      return VALID_FLAG.ERROR;
    }

    if (3 <= Number(bridgeSize) && 20 >= Number(bridgeSize)) {
      return VALID_FLAG.PASS;
    }

    return VALID_FLAG.DO; // 실패 케이스, 재입력 수행
  },

  /**
   * 이동 커맨드가 유효한 값인지 검사한다.
   */
  validateMoving(moving) {
    if (moving === undefined) {
      return VALID_FLAG.ERROR;
    }

    if (moving === GAME_COMMAND.UP || moving === GAME_COMMAND.DOWN) {
      return VALID_FLAG.PASS;
    }

    return VALID_FLAG.DO; // 실패 케이스, 재입력 수행
  },

  /**
   * 재시작 커맨드가 유효한 값인지 검사한다.
   */
  validateGameCommand(command) {
    if (command === undefined) {
      return VALID_FLAG.ERROR;
    }
    
    if (command === GAME_COMMAND.QUIT || command === GAME_COMMAND.RESTART) {
      return VALID_FLAG.PASS;
    }

    return VALID_FLAG.DO; // 실패 케이스, 재입력 수행
  },

  /**
   * 플래그에 따라 에러의 종류를 알려준다.
   */
  raiseError(flagValid) {
    try {
      if (flagValid === VALID_FLAG.DO) {
        throw ERROR_MESSAGE.NOT_VALID;
      } else if (flagValid === VALID_FLAG.ERROR){
        throw `[ERROR] 입력 값이 유효하지 않아 게임이 실행되지 않았습니다.`;
      }
    } catch (error) {
      MissionUtils.Console.print(error);
    }
  }
};

module.exports = ValidCheck;
