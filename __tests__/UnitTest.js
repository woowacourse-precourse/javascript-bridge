const BridgeMaker = require("../src/BridgeMaker");
const Validation = require("../src/Validation");

describe("Validation 객체 테스트", () => {
  test("bridgeLengthValidation가 숫자가 아닌경우", () => {
    expect(() => {
      Validation.bridgeLengthValidation("a");
    }).toThrow("[ERROR] 숫자만 입력해 주세요");
  });

  test("bridgeLengthValidation가 3 ~ 20 범위를 벗어난 경우", () => {
    expect(() => {
      Validation.bridgeLengthValidation("100");
    }).toThrow("[ERROR] 3 에서 20 사이의 수만 입력가능합니다");
  });

  test("moveCommandValidation가 U 또는 D 이외의 값을 입력한 경우", () => {
    expect(() => {
      Validation.moveCommandValidation("C");
    }).toThrow("[ERROR] U 또는 D 만 입력해 주세요");
  });

  test("retryCommandValidation R 또는 Q 이외의 값을 입력한 경우", () => {
    expect(() => {
      Validation.retryCommandValidation("C");
    }).toThrow("[ERROR] R 또는 Q 만 입력해 주세요");
  });
});

describe("BridgeMaker 객체 테스트", () => {
  test("makeBridge가 주어진 대로 다리를 잘 만들어 내는지", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });
});

