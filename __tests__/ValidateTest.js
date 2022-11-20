const MissionUtils = require("@woowacourse/mission-utils");
const ValidateBridgeSize = require("../src/utils/ValidateBridgeSize");
const ValidateGameCommand = require("../src/utils/ValidateGameCommand");
const ValidateMoving = require("../src/utils/ValidateMoving");


const runValidateClassErrorException = (inputs, className) => {
  expect(() => {
    new className(inputs);
  }).toThrow();
};

describe("ValidateBridgeSize 클래스 테스트", () => {
  test("다리 길이 입력값이 숫자가 아닌 경우 예외가 발생합니다.", () => {
    const testCase = [['bridgeSize'], ['woowacourse'], ['']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateBridgeSize);
    })
  });

  test("다리 길이 입력값이 음수인 경우 예외가 발생합니다.", () => {
    const testCase = [['-3'], ['-10'], ['-15']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateBridgeSize);
    })
  });

  test("다리 길이 입력값이 자연수가 아닌 경우 예외가 발생합니다.", () => {
    const testCase = [['3.5'], ['10.0000000000001'], ['9.99999999999999']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateBridgeSize);
    })
  });

  test("다리 길이 입력값이 3 이상 20 이하의 수가 아닌 경우 예외가 발생합니다.", () => {
    const testCase = [['2'], ['21'], ['0']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateBridgeSize);
    })
  });

  test("다리 길이 입력값에 공백이 포함되는 경우 예외가 발생합니다.", () => {
    const testCase = [['1        5'], ['1        0'], ['1      9']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateBridgeSize);
    })
  });
});

describe("ValidateMoving 클래스 테스트", () => {
  test("이동할 칸 입력값이 알파벳 문자가 아닌 경우 예외가 발생합니다.", () => {
    const testCase = [[''], ['1'], ['업']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateMoving);
    })
  });

  test("이동할 칸 입력값이 소문자인 경우 예외가 발생합니다.", () => {
    const testCase = [['u'], ['d'], ['a'], ['b'], ['c']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateMoving);
    })
  });

  test("이동할 칸 입력값이 대문자이지만 'U' 혹은 'D'가 아닐 경우 예외가 발생합니다.", () => {
    const testCase = [['A'], ['B'], ['C'], ['Y'], ['O']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateMoving);
    })
  });

  test("이동할 칸 입력값이 'U' 혹은 'D'지만, 입력값의 길이가 1이 아닐 경우 예외가 발생합니다.", () => {
    const testCase = [['UU'], ['UUU'], ['DD'], ['DDD'], ['UD']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateMoving);
    })
  });
});

describe("ValidateGameCommand 클래스 테스트", () => {
  test("재시작 여부 입력값이 알파벳 문자가 아닌 경우 예외가 발생합니다.", () => {
    const testCase = [[''], ['1'], ['재시작'], ['hello']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateGameCommand);
    })
  });

  test("재시작 여부 입력값이 알파벳 소문자인 경우 예외가 발생합니다.", () => {
    const testCase = [['r'], ['q'], ['a'], ['c']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateGameCommand);
    })
  });

  test("재시작 여부 입력값이 알파벳 대문자이지만 'R' 혹은 'Q'가 아닐 경우 예외가 발생합니다.", () => {
    const testCase = [['A'], ['B'], ['C'], ['P']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateGameCommand);
    })
  });

  test("재시작 여부 입력값이 알파벳 대문자 'R' 혹은 'Q'지만, 입력값의 길이가 1이 아닐 경우 예외가 발생합니다.", () => {
    const testCase = [['RR'], ['QQ'], ['RQ'], ['RQRQRQ']];
    testCase.forEach((input) => {
      runValidateClassErrorException(input, ValidateGameCommand);
    })
  });
});