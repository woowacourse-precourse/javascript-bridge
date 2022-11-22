const OutputView = require('../src/views/OutputView');
const MissionUtils = require('@woowacourse/mission-utils');

const logSpy = jest.spyOn(MissionUtils.Console, 'print');

describe('다리 화면 출력 확인하기', () => {
  const trials1 = [
    { direction: 'U', result: 'O' },
    { direction: 'D', result: 'O' },
    { direction: 'D', result: 'O' },
    { direction: 'U', result: 'X' },
  ];

  const trials2 = [
    { direction: 'D', result: 'O' },
    { direction: 'U', result: 'O' },
    { direction: 'U', result: 'O' },
    { direction: 'U', result: 'X' },
  ];

  test('bridgeMap 생성 테스트 (케이스1)', () => {
    expect(OutputView.getBridgeMap(trials1)).toBe('[ O |   |   | X ]\n[   | O | O |   ]\n');
  });

  test('bridgeMap 생성 테스트 (케이스2)', () => {
    expect(OutputView.getBridgeMap(trials2)).toBe('[   | O | O | X ]\n[ O |   |   |   ]\n');
  });

  test('printMap 출력 테스트 (케이스1)', () => {
    OutputView.printMap(trials1);
    expect(logSpy).toHaveBeenCalledWith('[ O |   |   | X ]\n[   | O | O |   ]\n');
  });

  test('printMap 출력 테스트 (케이스2)', () => {
    OutputView.printMap(trials2);
    expect(logSpy).toHaveBeenCalledWith('[   | O | O | X ]\n[ O |   |   |   ]\n');
  });
});
