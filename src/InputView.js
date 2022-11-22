const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE, ERROR_MESSAGE } = require("./Constant");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {

  /** 2. 다리 길이 입력 문구 출력 및 입력 */
  readBridgeSize() {
    return new Promise((resolve, reject) => {
      Console.readLine(GUIDE_MESSAGE.INPUT_LENGTH, (input) => {
        const result = this.vaildSizeInput(input);
        if (result) {
          resolve(input);
        } else {
          reject(new Error(ERROR_MESSAGE.LENGTH));
        }
      });
    })
  },

  /** 4. 사용자에게 이동할 칸 입력 및 값 출력 */
  readMoving() {
    return new Promise((resolve, reject) => {
      Console.readLine(GUIDE_MESSAGE.INPUT_MOVE, (input) => {
        const result = this.validMovingInput(input);
        if (result) {
          resolve(input);
        } else {
          reject(new Error(ERROR_MESSAGE.MOVE));
        }
      })
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  /** 2-2. 다리 길이 입력값 유효성 및 에러시 입력 재시작 */
  vaildSizeInput(input) {
    if (isNaN(input)) {
      return false;
    }

    if(Number(input) < 2 || Number(input) > 20) {
      return false;
    }
    return true;
  },

  /** 4-2. 이동할 칸 입력값 유효성 및 에러시 입력 재시작 */
  validMovingInput(input) {
    if(input !== "U" && input !== "D") {
      return false;
    }
    return true;
  },
};

module.exports = InputView;
