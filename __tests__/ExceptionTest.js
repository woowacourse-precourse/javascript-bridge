const CheckValidation = require("../src/Validation/CheckValidation");

describe("예외 처리 : 사이즈 입력 오류", () => {
  test.each([["2"], ["a"], ["10.5"], ["U"], ["D"], ["R"], ["Q"], ["1e5"]])(
    "테스트 케이스 %s",
    (testCase) => {
      expect(() => {
        CheckValidation.ValidSize(testCase);
      }).toThrow();
    }
  );
});

describe("예외 처리 : 움직임 입력 오류", () => {
  test.each([["2"], ["a"], ["10.5"], ["R"], ["Q"], ["u"], ["d"]])(
    "테스트 케이스 %s",
    (testCase) => {
      expect(() => {
        CheckValidation.ValidMove(testCase);
      }).toThrow();
    }
  );
});

describe("예외 처리 : 커맨드 입력 오류", () => {
  test.each([["2"], ["a"], ["10.5"], ["U"], ["D"]])(
    "테스트 케이스 %s",
    (testCase) => {
      expect(() => {
        CheckValidation.ValidCmd(testCase);
      }).toThrow();
    }
  );
});
