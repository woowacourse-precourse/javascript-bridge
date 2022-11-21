const OutputView = require('../src/views/OutputView');
const MissionUtils = require('@woowacourse/mission-utils');
const { printMap } = require('../src/views/OutputView');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

describe('다리 화면 출력 확인하기', () => {
  test('bridgeMap 생성 테스트 1', () => {
    const trials = [
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
      { direction: 'D', result: 'O' },
      { direction: 'U', result: 'X' },
    ];

    expect(OutputView.getBridgeMap(trials)).toEqual([
      '[ O |   |   | X ]',
      '[   | X | O |   ]',
      '\n',
    ]);
  });

  test('bridgeMap 생성 테스트 2', () => {
    const trials = [
      { direction: 'D', result: 'O' },
      { direction: 'U', result: 'X' },
      { direction: 'U', result: 'O' },
      { direction: 'U', result: 'X' },
    ];

    expect(OutputView.getBridgeMap(trials)).toEqual([
      '[   | X | O | X ]',
      '[ O |   |   |   ]',
      '\n',
    ]);
  });
});
