const BridgeModel = require('../src/BridgeModel');

describe('move', () => {
  const bridgeModel = new BridgeModel(['U', 'U', 'D', 'D']);
  test('첫 번째 이동(U): this.trials 에 {U, O} 추가', () => {
    bridgeModel.move('U');
    expect(bridgeModel.trials).toEqual([{ direction: 'U', result: 'O' }]);
    expect(bridgeModel.status).toBe('진행중');
  });

  test('두 번째 이동(D): this.trials 에 {D, X} 추가', () => {
    bridgeModel.move('D');
    expect(bridgeModel.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
    ]);
    expect(bridgeModel.status).toBe('실패');
  });

  test('세 번째 이동(U): this.trials 에 {U, X} 추가', () => {
    bridgeModel.move('U');
    expect(bridgeModel.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
      { direction: 'U', result: 'X' },
    ]);
    expect(bridgeModel.status).toBe('실패');
  });

  test('마지막 이동: this.trials 에 {D, O} 추가', () => {
    bridgeModel.move('D');
    expect(bridgeModel.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
      { direction: 'U', result: 'X' },
      { direction: 'D', result: 'O' },
    ]);

    expect(bridgeModel.status).toBe('성공');
  });
});
