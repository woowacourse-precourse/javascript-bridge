/* eslint-disable */
const Validate = require("../src/Validate");
const { ERROR_MESSAGES } = require("../src/Constants");

describe("Validate 객체 테스트", () => {
  test.each([["A"], ["@"], ["20a"]])(
    "다리 길이 입력값이 숫자가 아닐 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        Validate.checkSizeInputType(input);
      }).toThrow(ERROR_MESSAGES.SIZE_INPUT_TYPE);
    }
  );

  test.each([["0"], ["2.9999"], ["21"]])(
    "다리 길이가 3 ~ 20 사이의 숫자가 아닐 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        Validate.checkSizeInputRange(input);
      }).toThrow(ERROR_MESSAGES.SIZE_INPUT_RANGE);
    }
  );

  test.each([["S"], ["Q"], ["0"]])(
    "이동 경로 입력값이 U 혹은 D가 아닐 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        Validate.checkDirectionInputType(input);
      }).toThrow(ERROR_MESSAGES.DIRECTION_INPUT_TYPE);
    }
  );

  test.each([["1"], ["w"], ["E"]])(
    "게임 재시작 명령 입력값이 R 혹은 Q가 아닐 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        Validate.checkRetryCommandType(input);
      }).toThrow(ERROR_MESSAGES.checkRetryCommandType);
    }
  );
});
