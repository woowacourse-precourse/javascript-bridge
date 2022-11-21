const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const InputView = require("../src/InputView");

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const bridgeSizeException = (input) => {
  mockQuestions(input);
  const logSpy = getLogSpy();
  InputView.validateBridgeSize(input);

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const bridgeGenerator = (randomNumbers) => {
  const mockGenerator = randomNumbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, jest.fn());

  return BridgeMaker.makeBridge(3, mockGenerator);
}

describe("다리 생성 단위 테스트", () => {
  test("다리 생성 테스트 1", () => {
    const bridge = bridgeGenerator([1, 0, 0]);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("다리 생성 테스트 2", () => {
    const bridge = bridgeGenerator([1, 0, 1]);
    expect(bridge).toEqual(["U", "D", "U"]);
  });

  test("다리 생성 테스트 3", () => {
    const bridge = bridgeGenerator([0, 0, 0]);
    expect(bridge).toEqual(["D", "D", "D"]);
  });

  test("다리 생성 테스트 4", () => {
    const bridge = bridgeGenerator([0, 1, 0]);
    expect(bridge).toEqual(["D", "U", "D"]);
  });
})

describe("다리 생성 예외 테스트", () => {
  test.each([0, 1, 100, -1])("3 이상 20 이하가 아닌 수에 대한 예외 처리", (input) => {
    bridgeSizeException([input]);
  });

  test.each(["?", " ", "", "hi"])("숫자가 아닌 경우에 대한 예외 처리", (input) => {
    bridgeSizeException([input]);
  });
})