const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require('../src/InputView');
const App = require("../src/App");
const { MESSAGE } = require('../src/constants/messages');

describe('InputView 기능 테스트', () => {
  test('다리 길이 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다', () => {
    runBridgeSizeException(['string']);
    runBridgeSizeException(['105']);
    runBridgeSizeException(['1']);
  })

  test('이동 방향 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다.', () => {
    const logSpy = getLogSpy();
    mockQuestions(['3', 'Up']);
    const app = new App();
    app.play();
    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  })

  test('게임 커맨드 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1','0','1']);
    mockQuestions(['3', 'U' ,'U','Quit']);
    const app = new App();
    app.play();
    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  })
});

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

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runBridgeSizeException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};  


