const Validator = require("../src/util/Validator");

describe("사용자 입력값 유효성 테스트", () => {
  test.each(["0", "2", "21"])(
    "다리 길이는 3~20 사이의 숫자만 입력가능하다.",
    (input) => {
      expect(() => {
        Validator.isVaildBridgeSize(parseInt(input));
      }).toThrow("[ERROR] 3과 20사이의 숫자만 입력하세요.");
    }
  );
  test.each(["3", "20"])(
    "다리 길이는 3~20 사이의 숫자만 입력가능하다.",
    (input) => {
      expect(() => {
        Validator.isVaildBridgeSize(parseInt(input));
      }).not.toThrow();
    }
  );

  test.each(["a", "A", "!", " "])(
    "다리 길이는 숫자만 입력가능하다.",
    (input) => {
      expect(() => {
        Validator.isVaildBridgeSizeNum(input);
      }).toThrow("[ERROR] 숫자만 입력하세요.");
    }
  );
  test.each(["5", "6", "12", "15"])(
    "다리 길이는 숫자만 입력가능하다.",
    (input) => {
      expect(() => {
        Validator.isVaildBridgeSizeNum(input);
      }).not.toThrow();
    }
  );

  test.each(["u", "a", " ", "!", 5])(
    '움직일 칸의 입력값은 "U" 또는 "D"만 입력가능하다.',
    (input) => {
      expect(() => {
        Validator.isVaildUorD(input);
      }).toThrow('[ERROR] "U" 또는 "D"만 입력가능합니다.');
    }
  );
  test.each(["U", "D"])(
    '움직일 칸의 입력값은 "U" 또는 "D"만 입력가능하다.',
    (input) => {
      expect(() => {
        Validator.isVaildUorD(input);
      }).not.toThrow();
    }
  );

  test.each(["q", "a", " ", "!", 10])(
    '재시작 또는 종료의 입력값은 "R" 또는 "Q"만 입력가능하다.',
    (input) => {
      expect(() => {
        Validator.isVaildRorQ(input);
      }).toThrow('[ERROR] "R" 또는 "Q"만 입력가능합니다.');
    }
  );
  test.each(["Q", "R"])(
    '재시작 또는 종료의 입력값은 "R" 또는 "Q"만 입력가능하다.',
    (input) => {
      expect(() => {
        Validator.isVaildRorQ(input);
      }).not.toThrow();
    }
  );
});
