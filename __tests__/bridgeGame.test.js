const BridgeGame = require('../src/BridgeGame');

const bridgeGame = new BridgeGame();
bridgeGame.setBridge(['U', 'U', 'U', 'D']);

describe('move', () => {
  test('첫 번째 이동(U): trials 에 {U, O} 추가', () => {
    bridgeGame.move('U');
    expect(bridgeGame.trials).toEqual([{ direction: 'U', result: 'O' }]);
  });

  test('첫 번째 이동(U): status 진행중으로 변경', () => {
    expect(bridgeGame.status).toBe('진행중');
  });

  test('두 번째 이동(D): {D, X} 추가 및 status 실패', () => {
    bridgeGame.move('D');
    expect(bridgeGame.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
    ]);
  });

  test('두 번째 이동(D): status 실패로 변경', () => {
    expect(bridgeGame.status).toBe('실패');
  });

  test('세 번째 이동(U): trials 에 {U, X} 추가', () => {
    bridgeGame.move('U');
    expect(bridgeGame.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
      { direction: 'U', result: 'O' },
    ]);
  });

  test('세 번째 이동(U): status 진행중으로 변경', () => {
    expect(bridgeGame.status).toBe('진행중');
  });

  test('마지막 이동(D): trials 에 {D, O} 추가', () => {
    bridgeGame.move('D');
    expect(bridgeGame.trials).toEqual([
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'X' },
      { direction: 'U', result: 'O' },
      { direction: 'D', result: 'O' },
    ]);
  });

  test('마지막 이동(D): status 성공으로 변경', () => {
    expect(bridgeGame.status).toBe('성공');
  });
});
