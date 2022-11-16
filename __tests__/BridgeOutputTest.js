const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('../src/OutputView');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('다리 건너기 출력 테스트', () => {
  test('건너기 결과를 올바른 출력물로 변환하는지 테스트', () => {
    const logSpy = getLogSpy();
    const bridge = ['U', 'D', 'D', 'U', 'U'];
    const inputs = ['U', 'D', 'U'];

    OutputView.printMap(bridge, inputs);

    expect(logSpy).toHaveBeenCalledWith('[ O |   | X ]\n[   | O |   ]');
  });
});
