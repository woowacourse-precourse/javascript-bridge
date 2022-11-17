const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation.js");
const withError = require("./utils/withError.js");

const { Console } = MissionUtils;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function} current
   * @param {function} next
   */
  readBridgeSize(current, next) {
    const message = "다리의 길이를 입력해주세요.\n";
    const validateLength = Validation.validateBridgeLength.bind(Validation);
    Console.readLine(message, withError(validateLength, current, next));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(current, next) {
    const message = "이동할 칸을 선택해주세요. (위: U, 아래: D)\n";
    const validateMoveCommand = (inputs) =>
      Validation.validateCommand(inputs, ["U", "D"]);

    Console.readLine(message, withError(validateMoveCommand, current, next));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(current, next) {
    const message =
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n";
    const validateEndCommand = (inputs) =>
      Validation.validateCommand(inputs, ["R", "Q"]);

    Console.readLine(validateEndCommand, message, withError(current, next));
  },
};

module.exports = InputView;
