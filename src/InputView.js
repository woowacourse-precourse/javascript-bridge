const { Console } = require("@woowacourse/mission-utils");
const { ANNOUNCEMENT_MESSAGE, BRIDGE_DETAIL } = require("./constant/Constant");
const Validation = require("./utils/Validation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

function validateNumber(toNumberUserInput, callback, nextCallback) {
  try {
    Validation.isNumber(toNumberUserInput);
    return true;
  } catch (e) {
    Console.print(e);
    return InputView.readBridgeSize(callback, nextCallback);
  }
}

function validateIsBridge(toNumberUserInput, callback, nextCallback) {
  try {
    Validation.isBridgeLength(toNumberUserInput);
    return true;
  } catch (e) {
    Console.print(e);
    return InputView.readBridgeSize(callback, nextCallback);
  }
}

function validateIsBridgeWords(userInput, callback, nextCallback) {
  try {
    Validation.isBridgeWords(userInput);
    return true;
  } catch (e) {
    Console.print(e);
    return InputView.readMoving(callback, nextCallback);
  }
}

function validateBridgeSize(toNumberUserInput, callback, nextCallback) {
  const validateNumberResult = validateNumber(
    toNumberUserInput,
    callback,
    nextCallback
  );
  const validateIsBridgeResult = validateIsBridge(
    toNumberUserInput,
    callback,
    nextCallback
  );
  if (validateNumberResult && validateIsBridgeResult) return true;
}

function validateIsRetryWords(userInput, callback) {
  try {
    Validation.isRetryWords(userInput);
    return true;
  } catch (e) {
    Console.print(e);
    return InputView.readGameCommand(callback);
  }
}

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback, nextCallback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.GET_BRIDGE, (userInput) => {
      const toNumberUserInput = Number(userInput);
      const validation = validateBridgeSize(
        toNumberUserInput,
        callback,
        nextCallback
      );
      if (validation) {
        callback(toNumberUserInput);
        nextCallback();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, nextCallback, endCallback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.MOVE_SPACE, (userInput) => {
      const validation = validateIsBridgeWords(
        userInput,
        callback,
        nextCallback
      );
      if (validation) {
        const result = callback(userInput);
        if (result === "END") return endCallback(BRIDGE_DETAIL.SUCCESS);
        if (result) this.readMoving(callback, nextCallback, endCallback);
        else if (!result) nextCallback();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback, nextCallback, endCallback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.RETRY, (userInput) => {
      const validation = validateIsRetryWords(userInput, callback);
      if (validation) {
        const result = callback(userInput);
        if (result === BRIDGE_DETAIL.RETRY_COMMAND) nextCallback();
        else if (result === BRIDGE_DETAIL.END_COMMAND)
          endCallback(BRIDGE_DETAIL.FAIL);
      }
    });
  },
};

module.exports = InputView;
