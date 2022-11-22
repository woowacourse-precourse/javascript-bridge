const MissionUtils = require("@woowacourse/mission-utils");
const message = require("./constants/message.js");
const term = require("./constants/term.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  bridgeCount: 0,
  numberArray: [],
  inputChar: "",

  readBridgeSize() {
    MissionUtils.Console.readLine(message.ASK_BRIDGE_LENGTH, (answer) => {
      const number = this.exceptionInputNumberCheck(answer);
      this.bridgeCount = number;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(message.MOVE_MESSAGE, (answer) => {
      this.inputChar = this.exceptionMovingCheck(answer);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(
      message.RESTART_END_GAME_MESSAGE,
      (answer) => {
        this.command = this.exceptionCommandCheck(answer);
      }
    );
  },
  //숫자 입력 예외 확인
  exceptionInputNumberCheck(answer) {
    const input = this.splitInput(answer);
    this.numberCheck(input);
    const number = parseInt(input.join(""));
    return this.numberRangeCheck(number);
  },

  splitInput(input) {
    return input.split(""); //배열 return
  },

  numberCheck(input) {
    //모두 숫자인지 확인
    const isNumber = input
      .map((item) => parseInt(item))
      .every((item) => isNaN(item) !== true);
    if (!isNumber) {
      MissionUtils.Console.close();
      throw new Error(message.NOT_A_NUMBER_MESSAGE);
    }
  },

  numberRangeCheck(input) {
    if (input < 3 || 20 < input) {
      MissionUtils.Console.close();
      throw new Error(message.NOT_NUMBER_RANGE_MESSAGE);
    }
    return input;
  },

  //움직임 체크 U,D
  exceptionMovingCheck(answer) {
    const input = this.splitInput(answer);
    const movingChar = this.characterCorrectLengthCheck(input);
    return movingChar;
  },

  exceptionCommandCheck(answer) {
    const input = this.splitInput(answer);
    const movingChar = this.characterCorrectLengthCheck(input);
    return movingChar;
  },

  characterCorrectLengthCheck(input) {
    //입력된 값 한자리인지 확인
    if (input.length != term.INPUT_CHAR_LENGTH) {
      MissionUtils.Console.close();
      throw new Error(message.NOT_ONE_CHAR_MESSAGE);
    }
    return input.join("");
  },
};

module.exports = InputView;
