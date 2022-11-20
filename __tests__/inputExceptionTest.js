const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('../src/InputView');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((_, callback) => { callback(input); }),
    MissionUtils.Console.readLine,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const runException = (input) => {
  mockQuestions(input);
  const logSpy = getLogSpy();

  InputView.readBridgeSize();
  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

describe('다리 길이 입력 테스트', () => {
  test.each([[['3']], [['20']], [['7']]])('정상', (input) => {
    mockQuestions(input);
    expect(InputView.readBridgeSize()).toEqual(Number(input[0]));
  });

  test.each([[['woowacourse', '3']], [['0x13', '3']], [['123b', '3']]])('예외: 입력값이 숫자가 아님', (input) => {
    runException(input);
  });

  test.each([[['-1', '3']], [['12.345', '3']], [['0', '3']]])('예외: 입력값이 자연수가 아님', (input) => {
    runException(input);
  });

  test.each([[['2', '3']], [['21', '3']], [['121687', '3']]])('예외: 입력값 범위', (input) => {
    runException(input);
  });

  test('연속된 잘못된 입력값에 대한 처리', () => {
    mockQuestions(['0x13', '12.345', '121687', '-1', '다리', '15']);
    expect(InputView.readBridgeSize()).toEqual(15);
  });
});
