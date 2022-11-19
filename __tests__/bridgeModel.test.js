const BridgeModel = require('../src/BridgeModel');

describe('move', () => {
  const bridgeModel = new BridgeModel(['U', 'U', 'D']);
  test('첫 번째 이동(U): this.trails 에 {U, O} 추가', () => {
    bridgeModel.move('U');
    expect(bridgeModel.trials).toEqual([{ direction: 'U', result: 'O' }]);
  });

  test('두 번째 이동(D): this.trails 에 {D, X} 추가', () => {
    bridgeModel.move('D');
    expect(bridgeModel.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
    ]);
  });

  test('세 번째 이동(D): this.trails 에 {D, X} 추가', () => {
    bridgeModel.move('U');
    expect(bridgeModel.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
      { direction: 'U', result: 'X' },
    ]);
  });
});
