const InputValidate = require("../src/InputValidate");

describe("validateBridgeLength() 유효성 검증 테스트 - 다리 길이 입력값", () => {
  test("다리 길이는 숫자(정수)를 입력해야 합니다.", () => {
    const inputs = ['3', '20'];
    const errors = ['a', '1 0', '10a', '10.0'];

    inputs.forEach(input => {
      expect(() => {
        InputValidate.validateBridgeLength(input);
      }).not.toThrow();
    });

    errors.forEach(error => {
      expect(() => {
        InputValidate.validateBridgeLength(error);
      }).toThrow();
    });
  });

  test("다리 길이는 3이상 20이하의 수를 입력해야 합니다.", () => {
    const inputs = ['3','20'];
    const errors = ['1', '21'];

    inputs.forEach(input => {
      expect(() => {
        InputValidate.validateBridgeLength(input);
      }).not.toThrow();
    });

    errors.forEach(error => {
      expect(() => {
        InputValidate.validateBridgeLength(error);
      }).toThrow();
    });
  });
});

describe("validateDirection() 유효성 검증 테스트 - 이동 방향 입력값", () => {
  test("방향 입력값은 U 혹은 D여야 합니다.", () => {
    const inputs = ['U','D'];
    const errors = ['a', '1', 'u'];

    inputs.forEach(input => {
      expect(() => {
        InputValidate.validateDirection(input);
      }).not.toThrow();
    });

    errors.forEach(error => {
      expect(() => {
        InputValidate.validateDirection(error);
      }).toThrow();
    });
  });
});

describe("validateRetry() 유효성 검증 테스트 - 재시도 여부 입력값", () => {
  test("재시도 입력값은 R 혹은 Q여야 합니다.", () => {
    const inputs = ['R','Q'];
    const errors = ['a', '1', 'r'];

    inputs.forEach(input => {
      expect(() => {
        InputValidate.validateRetry(input);
      }).not.toThrow();
    })

    errors.forEach(error => {
      expect(() => {
        InputValidate.validateRetry(error);
      }).toThrow();
    });
  });
});