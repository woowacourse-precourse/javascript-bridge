const Validation = require('../src/Validation.js');
const { ErrorMessage } = require("../src/constant/Constants.js");

describe("Validation 테스트", () => {
  describe("다리 길이 입력 테스트", () => {
    test("문자값 입력 테스트", () => {
      expect(() => {
        Validation.isNumber("a");
      }).toThrow(ErrorMessage.IS_NOT_NUMBER);
    });

    test("범위에 벗어난 값 입력 테스트", () => {
      expect(() => {
        Validation.isValidRangeSize(1);
      }).toThrow(ErrorMessage.BRIDGE_SIZE);
    });
  }),

  describe("움직일 방향 입력 테스트", () => {
    test("숫자값 입력 테스트", () => {
      expect(() => {
        Validation.isValidDirection(1);
      }).toThrow(ErrorMessage.MOVING_DIRECTION);
    });

    test("U와 D가 아닌 값 입력 테스트", () => {
      expect(() => {
        Validation.isValidDirection("K");
      }).toThrow(ErrorMessage.MOVING_DIRECTION);
    });
  }),

  describe("게임 커맨드 입력 테스트", () => {
    test("숫자값 입력 테스트", () => {
      expect(() => {
        Validation.isValidRetryOrQuitInput(1);
      }).toThrow(ErrorMessage.RETRY_OR_QUIT);
    });
    
    test("R과 Q가 아닌 값 입력 테스트", () => {
      expect(() => {
        Validation.isValidRetryOrQuitInput("K");
      }).toThrow(ErrorMessage.RETRY_OR_QUIT);
    });
  })
})
