const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = logSpy => {
  return [...logSpy.mock.calls].join('');
};

const runException = inputs => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach(log => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

test('예외 테스트 - 숫자가 아닌 수 입력', () => {
  runException(['a']);
});

test('예외 테스트 - 범위에 맞지 않는 수 입력', () => {
  runException([2]);
});

test('예외 테스트 - U와 D가 아닌 문자 입력', () => {
  runException([5, 'S']);
});

test('예외 테스트 - 재시작 할 때 R과 Q가 아닌 문자 입력', () => {
  mockRandoms([1, 1, 1]);
  mockQuestions(['3', 'U', 'D', 'K']);

  runException([3, 'U', 'D', 'K']);
});
