const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const Controller = require("../src/Controller");
const OutputView = require("../src/OutputView");

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

describe("게임 테스트", () => {
  test("다리 길이 저장 확인", () => {
    Controller.getSize(7);
    expect(Controller.size).toBe(7);
  });

  test("입력된 이동 인풋이 플레이어 배열에 저장 되는지 확인", () => {
    Controller.addPlayerBlock("U");
    expect(Controller.playerArr).toEqual(["U"]);
  });

  test("입력된 이동 인풋에 따라 현재 이동 결과 배열에 저장 되는지 확인", () => {
    Controller.successMove("U");
    expect(Controller.arrayState).toEqual([["O"], [" "]]);
  });

  test("커맨드 인풋 에러 검증 확인", () => {
    expect(Controller.isCommandError("ㅁ")).toBeTruthy();
  });

  test("시도 횟수 증가 테스트", () => {
    Controller.addTrialCount();
    expect(Controller.tryCount).toBe(2);
  });

  test("실패시 성공 여부 변경 확인", () => {
    failArray = OutputView.nowArray = ["X", " "];
    Controller.checkSuccess(failArray);
    expect(Controller.gameResult).toEqual("실패");
  });

});
