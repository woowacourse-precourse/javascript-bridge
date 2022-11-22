const BridgeResult = require('../src/domain/BridgeResult');

describe('BridgeResult 테스트', () => {
  test.each([
    [3, { U: ['O', ' ', 'O'], D: [' ', 'O', ' '] }],
    [5, { U: ['O', ' ', 'O', 'O', 'O'], D: [' ', 'O', ' ', ' ', ' '] }],
  ])('다리를 끝까지 건넜다면 true를 리턴한다.', (bridgeSize, bridgeMap) => {
    const bridgeResult = new BridgeResult(bridgeSize);
    bridgeResult.save(bridgeMap);
    expect(bridgeResult.checkSuccess()).toBeTruthy();
  });

  test.each([
    [3, { U: ['O', ' ', 'X'], D: [' ', 'O', ' '] }],
    [5, { U: ['O', ' ', 'O'], D: [' ', 'O', ' '] }],
  ])(
    '이동할 수 없는 칸을 선택했거나 다리를 끝까지 건너지 못했다면 false를 리턴한다.',
    (bridgeSize, bridgeMap) => {
      const bridgeResult = new BridgeResult(bridgeSize);
      bridgeResult.save(bridgeMap);
      expect(bridgeResult.checkSuccess()).toBeFalsy();
    },
  );

  test('1번 재시도한 경우 총 시도 횟수는 2를 반환한다.', () => {
    const bridgeResult = new BridgeResult(3);
    bridgeResult.addTryCount();
    const { tryCount } = bridgeResult.getResult();
    expect(tryCount).toEqual(2);
  });
});
