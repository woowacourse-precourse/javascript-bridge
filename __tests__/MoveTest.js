const BridgeGame = require('../src/BridgeGame');

test.each([
  ['U', 'D', 'D'],
  ['D', 'U', 'U', 'D', 'U'],
  ['U', 'D', 'U', 'D', 'U', 'U', 'D', 'U'],
])(
  '다리 구조를 받고, 올바른 방향으로 끝까지 가서 현재 위치(다리의 길이)를 반환하는 테스트',
  (input) => {
    const bridgeGame = new BridgeGame(input);
    for (let i = 0; i < input.length; i++) {
      bridgeGame.move(input[i]);
    }
    expect(bridgeGame.marker).toBe(input.length);
  }
);

describe('다리 구조를 받고, 틀린 방향으로 이동하는 테스트', () => {
  test('2/3 위치에서 실패', () => {
    expect(() => {
      const bridgeGame = new BridgeGame(['U', 'D', 'D']);
      bridgeGame.move('U');
      bridgeGame.move('U');
    }).toThrow();
  });
  test('3/5 위치에서 실패', () => {
    expect(() => {
      const bridgeGame = new BridgeGame(['D', 'U', 'U', 'D', 'U']);
      bridgeGame.move('D');
      bridgeGame.move('U');
      bridgeGame.move('D');
    }).toThrow();
  });
  test('6/8 위치에서 실패', () => {
    expect(() => {
      const bridgeGame = new BridgeGame([
        'U',
        'D',
        'U',
        'D',
        'U',
        'U',
        'D',
        'U',
      ]);
      bridgeGame.move('U');
      bridgeGame.move('D');
      bridgeGame.move('U');
      bridgeGame.move('D');
      bridgeGame.move('U');
      bridgeGame.move('D');
    }).toThrow();
  });
});
