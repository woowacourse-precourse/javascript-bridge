const MissionUtils = require("@woowacourse/mission-utils");

const ValidCheck = {
  VALID_CHECK_ERROR: -1,
  VALID_CHECK_DO: 0,
  VALID_CHECK_PASS: 1,
  UP_COMMAND: 'U',
  DOWN_COMMAND: 'D',
  QUIT_COMMAND: 'Q',
  RESTART_COMMAND: 'R',
  /**
   * 다리 길이가 유효한 값인지 검사한다.
   */
  validBridgeSize(bridgeSize) {
    if (bridgeSize === undefined) {
      return ValidCheck.VALID_CHECK_ERROR;
    }

    if (3 <= Number(bridgeSize) && 20 >= Number(bridgeSize)) {
      return ValidCheck.VALID_CHECK_PASS;
    }

    return ValidCheck.VALID_CHECK_DO;
  },

  /**
   * 이동 커맨드가 유효한 값인지 검사한다.
   */
  validMoving(moving) {
    if (moving === undefined) {
      return ValidCheck.VALID_CHECK_ERROR;
    }

    if (moving === ValidCheck.UP_COMMAND || moving === ValidCheck.DOWN_COMMAND) {
      return ValidCheck.VALID_CHECK_PASS;
    }

    return ValidCheck.VALID_CHECK_DO;
  },

  /**
   * 재시작 커맨드가 유효한 값인지 검사한다.
   */
  validReadGameCommand(command) {
    if (command === undefined) {
      return ValidCheck.VALID_CHECK_ERROR;
    }
    
    if (command === ValidCheck.QUIT_COMMAND || command === ValidCheck.RESTART_COMMAND) {
      return ValidCheck.VALID_CHECK_PASS;
    }

    return ValidCheck.VALID_CHECK_DO;
  },

  raiseError(flagValid) {
    try {
      if (flagValid === ValidCheck.VALID_CHECK_DO) {
        throw `[ERROR] 유효한 값이 아닙니다. 재입력해주세요.`;
      } else if (flagValid === ValidCheck.VALID_CHECK_ERROR){
        throw `[ERROR] 입력 값이 유효하지 않아 게임이 실행되지 않았습니다.`;
      }
    } catch (error) {
      MissionUtils.Console.print(error);
    }
  }
};

module.exports = ValidCheck;
