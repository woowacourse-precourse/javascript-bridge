const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const { bridgeValidation, moveValidation, restartValidation } = require('../src/validate.js');
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

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("Input 테스트", () => {
  test('bridgeSize Test', () => {
    expect(() => {
      bridgeValidation('A');
    }).toThrow('[ERROR] 다리의 길이는 정수만 입력 가능합니다.');
  });

  test('bridgeSize Test2', () => {
    expect(() => {
      bridgeValidation(-1);
    }).toThrow('[ERROR] 다리의 길이는 3이상 20이하 입니다.');
  });

  test('moveValidation Test', () => {
    expect(() => {
      moveValidation('A');
    }).toThrow('[ERROR] 위(U) 아래(D)를 입력해주세요.');
  });

  test('moveValidation Test2', () => {
    expect(() => {
      moveValidation(3);
    }).toThrow('[ERROR] 위(U) 아래(D)를 입력해주세요.');
  });

  test('restartValidation Test', () => {
    expect(() => {
      restartValidation('A');
    }).toThrow('[ERROR] 재시작(R) 나가기(Q)를 입력해주세요.');
  });

  test('restartValidation Test2', () => {
    expect(() => {
      restartValidation(3);
    }).toThrow('[ERROR] 재시작(R) 나가기(Q)를 입력해주세요.');
  });


});


describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("다리 생성 테스트2", () => {
    const randomNumbers = ["1","1","1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    expect(bridge).toEqual(["U","U","U", "D", "D"]);
  });


  test("기능 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms(["1", "0", "1"]);
    mockQuestions(["3", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "최종 게임 결과",
      "[ O |   | O ]",
      "[   | O |   ]",
      "게임 성공 여부: 성공",
      "총 시도한 횟수: 1",
    ]);
    expectBridgeOrder(log, "[ O |   | O ]", "[   | O |   ]");
  });

  test("예외 테스트", () => {
    runException(["a"]);
  });
});
