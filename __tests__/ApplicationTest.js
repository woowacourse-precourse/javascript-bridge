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
  // spyOn은 MissionUtils.Console.print를 추적하는 목함수를 만들어 반환
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  // mock.fn의 call, instance, context, result 배열을 비움
  logSpy.mockClear();
  // mock.fn 함수를 반환
  return logSpy;
};

const getOutput = (logSpy) => {
  // mock.fn 함수 호출의 호출 인수를 포함하는 배열 -> MissionUtils.Console.print() 호출 시 인수를 담은 배열
  // fn(1,2), fn(3,4) 호출 시 [[1,2], [3,4]] 반환
  // 배열들을 하나의 문자열로 반환 > "1,23,4"
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  // getOutput(logSpy) = '다리 건너기 게임을 시작합니다. [ERROR] Validate.isNumber occur exception'
  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  // received = '다리 건너기 게임을 시작합니다. [ERROR] Validate.isNumber occur exception'
  // expect.stringContaining([ERROR]) = '[ERROR]'가 received에 포함되어 있는지 확인
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("다리 건너기 테스트", () => {
  // test("다리 생성 테스트", () => {
  //   const randomNumbers = ["1", "0", "0"];
  //   const mockGenerator = randomNumbers.reduce((acc, number) => {
  //     return acc.mockReturnValueOnce(number);
  //   }, jest.fn());

  //   const bridge = BridgeMaker.makeBridge(3, mockGenerator);
  //   expect(bridge).toEqual(["U", "D", "D"]);
  // });

  // test("기능 테스트", () => {
  //   const logSpy = getLogSpy();
  //   mockRandoms(["1", "0", "1"]);
  //   mockQuestions(["3", "U", "D", "U"]);

  //   const app = new App();
  //   app.play();

  //   const log = getOutput(logSpy);
  //   expectLogContains(log, [
  //     "최종 게임 결과",
  //     "[ O |   | O ]",
  //     "[   | O |   ]",
  //     "게임 성공 여부: 성공",
  //     "총 시도한 횟수: 1",
  //   ]);
  //   expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  // });

  test("예외 테스트", () => {
    runException(["a"]);
  });
});
