const { Console, Random } = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const moveException = (input) => {
  mockQuestions(input);
  const logSpy = getLogSpy();
  InputView.valitateMoving(input);

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

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("다리 건너기 단위 테스트", () => {
  test("입력한 위치에 표시 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1]);
    mockQuestions(["4", "U", "D", "U", "U"]);
    
    InputView.readBridgeSize();
    const log = getOutput(logSpy);
    expectBridgeOrder(log, "[ O |   | O | O ]", "[   | O |   |   ]");
  });
})

describe("다리 건너기 예외 테스트", () => {
  test.each([0, "C", "?", -1])("U와 D가 아닌 입력에 대한 예외 처리", (input) => {
    moveException([input]);
  });
})