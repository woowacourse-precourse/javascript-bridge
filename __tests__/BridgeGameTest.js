const BridgeGame = require('../src/models/BridgeGame');
const bridgeClassForTest = require('./BridgeTest');

const bridgeGameClassForTest = new BridgeGame(bridgeClassForTest);

describe('BridgeGame 클래스 테스트', () => {
  test('결과 문자열 반환 테스트', () => {
    const firstMoving = ['U', 'D', 'U'];
    firstMoving.forEach((item) => {
      bridgeGameClassForTest.move(item);
    });
    expect(bridgeGameClassForTest.resultString).toEqual([
      '[ O |   | O ]',
      '[   | O |   ]',
    ]);
  });

  test('재시작 테스트', () => {
    bridgeGameClassForTest.retry();
    expect(bridgeGameClassForTest.totalGameString).toEqual('총 시도한 횟수: 2');
    expect(bridgeGameClassForTest.resultString).toEqual([']', ']']);
  });
});
