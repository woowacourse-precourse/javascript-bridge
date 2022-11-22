const MissionUtils = require("@woowacourse/mission-utils");

const {
  VALID_CHECK_DO,
  VALID_CHECK_ERROR,
  VALID_CHECK_PASS,
  UP_MOVING,
  DOWN_MOVING,
  QUIT_COMMAND,
  RESTART_COMMAND
} = require("./GameCommands");

const ValidCheck = {
  /**
   * 다리 길이가 유효한 값인지 검사한다.
   */
  validateBridgeSize(bridgeSize) {
    if (bridgeSize === undefined) {
      return VALID_CHECK_ERROR;
    }

    if (3 <= Number(bridgeSize) && 20 >= Number(bridgeSize)) {
      return VALID_CHECK_PASS;
    }

    return VALID_CHECK_DO; // 실패 케이스, 재입력 수행
  },

  /**
   * 이동 커맨드가 유효한 값인지 검사한다.
   */
  validateMoving(moving) {
    if (moving === undefined) {
      return VALID_CHECK_ERROR;
    }

    if (moving === UP_MOVING || moving === DOWN_MOVING) {
      return VALID_CHECK_PASS;
    }

    return VALID_CHECK_DO; // 실패 케이스, 재입력 수행
  },

  /**
   * 재시작 커맨드가 유효한 값인지 검사한다.
   */
  validateGameCommand(command) {
    if (command === undefined) {
      return VALID_CHECK_ERROR;
    }
    
    if (command === QUIT_COMMAND || command === RESTART_COMMAND) {
      return VALID_CHECK_PASS;
    }

    return VALID_CHECK_DO; // 실패 케이스, 재입력 수행
  },

  /**
   * 플래그에 따라 에러의 종류를 알려준다.
   */
  raiseError(flagValid) {
    try {
      if (flagValid === VALID_CHECK_DO) {
        throw `[ERROR] 유효한 값이 아닙니다. 재입력해주세요.`;
      } else if (flagValid === VALID_CHECK_ERROR){
        throw `[ERROR] 입력 값이 유효하지 않아 게임이 실행되지 않았습니다.`;
      }
    } catch (error) {
      MissionUtils.Console.print(error);
    }
  }
};

module.exports = ValidCheck;
