const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
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

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("예외 처리 테스트", () => {
    test("다리 생성 입력시 숫자가 아닌 문자가 입력되면 예외가 발생한다.", () => {
        const logSpy = getLogSpy();
        mockQuestions(["a"]);
    
        const app = new App();
        app.play();
    
        const log = getOutput(logSpy);
        expectLogContains(log, ["[ERROR]"]);
      });
    test("다리 생성 입력시 3미만 숫자가 입력되면 예외가 발생한다.", () => {
        const logSpy = getLogSpy();
        mockQuestions(["1"]);
    
        const app = new App();
        app.play();
    
        const log = getOutput(logSpy);
        expectLogContains(log, ["[ERROR]"]);
      });
    test("다리 생성 입력시 20초과 숫자가 입력되면 예외가 발생한다.", () => {
        const logSpy = getLogSpy();
        mockQuestions(["31"]);
    
        const app = new App();
        app.play();
    
        const log = getOutput(logSpy);
        expectLogContains(log, ["[ERROR]"]);
      });
    test("이동 입력시 U혹은 D이외의 문자가 입력되면 예외가 발생한다.", () => {
        const logSpy = getLogSpy();
        mockRandoms([1, 0, 1]);
        mockQuestions(["3", "R"]);
    
        const app = new App();
        app.play();
    
        const log = getOutput(logSpy);
        expectLogContains(log, ["[ERROR]"]);
      });
    test("재시작 입력시 R혹은 Q이외의 문자가 입력되면 예외가 발생한다.", () => {
        const logSpy = getLogSpy();
        mockRandoms([1, 0, 1]);
        mockQuestions(["3", "D", "LL"]);
    
        const app = new App();
        app.play();
    
        const log = getOutput(logSpy);
        expectLogContains(log, ["[ERROR]"]);
      });
    
});