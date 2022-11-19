const OutputView = require('../src/view/OutputView');
const Bridge = require('../src/domain/Bridge');
const { mockQuestions, mockRandoms, getLogSpy } = require('./ApplicationTest');

describe('출력 테스트', () => {
  test('다리를 올바르게 출력하는지 확인', () => {
    mockRandoms(['1', '0', '1', '0', '1']);

    const bridge = new Bridge(5);
    const map = bridge.partialBridgeMap(5);
    const logSpy = getLogSpy();

    const logs = ['[ O |   | O |   |   ]', '[   | O |   | O | X ]'];
    OutputView.printMap(map, false);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
