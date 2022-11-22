const MissionUtils = require('@woowacourse/mission-utils');
const Gameflow = require('../src/Controller/Gameflow');

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
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 출력 테스트', () => {
  test('다리 이동 결과 출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0, 0]);
    mockQuestions(['4', 'U', 'D', 'D', 'D']);

    const gameflow = new Gameflow();
    gameflow.start();

    const log = getOutput(logSpy);
    expectBridgeOrder(log, '[ O |   |   |   ]', '[   | O | O | O ]');
  });
});