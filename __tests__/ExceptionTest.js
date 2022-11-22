const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("예외 테스트", () => {
  mockRandoms([0, 1, 1, 0, 1, 1, 1]);

  test("1. 다리 길이 입력값 예외 : 입력 값이 정수 일 때 ", () => {
    // 다리 길이 입력 시, 정수가 아닌 문자를 입력
    runException(["a"]);
  });
  test("2. 다리 길이 입력값 예외 : 입력 값이 3부터 20 사이의 수가 아닐 때", () => {
    // 다리 길이 입력 시, 3 미만의 값을 입력
    runException(["2"]);
  });
  test("3. 다리 길이 입력값 예외 : 입력 값이 3부터 20 사이의 수가 아닐 때", () => {
    // 다리 길이 입력 시, 20을 초과하는 값을 입력
    runException(["21"]);
  });
  test("4. 이동 입력값 예외('U', 'D') : 입력 값이 여러 개 일때", () => {
    // 첫 번째 칸을 건너고 두 번째 칸 이동 시 UD를 입력
    runException(["5", "D", "UD"]);
  });
  test("5. 이동 입력값 예외('U', 'D') : 입력 값이 U 또는 D가 아닐 때", () => {
    // 첫 번째 칸을 건너고 두 번째 칸 이동 시 K를 입력
    runException(["5", "D", "K"]);
  });
  test("6. 재시작 예외('R', 'Q') : 입력 값이 R 또는 Q가 아닐 때", () => {
    // 3번째 다리에서 실패 후, 재시작 시 K를 입력
    runException(["5", "D", "U", "U", "K"]);
  });
});
