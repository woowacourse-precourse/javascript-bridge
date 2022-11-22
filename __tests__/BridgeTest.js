const Bridge = require('../src/domain/Bridge');

describe('Bridge 테스트', () => {
  test.each([[['D', 'U']], [['d', 'D', 'D']], [['1', 'D', 'U']]])(
    '유효한 다리패턴이 아니면 예외를 발생시킨다.',
    (input) => {
      expect(() => new Bridge(input)).toThrow('[ERROR]');
    },
  );

  test.each([
    [['U', 'D', 'U'], { U: ['O', ' ', 'O'], D: [' ', 'O', ' '] }, 'O'],
    [['U', 'D', 'D'], { U: ['O', ' ', 'X'], D: [' ', 'O', ' '] }, 'X'],
  ])(
    '현재까지 이동한 다리의 상태와 현재 칸의 정답여부를 반환한다.',
    (pattern, bridgeMap, checking) => {
      const bridge = new Bridge(pattern);
      const playerMovings = ['U', 'D', 'U'];
      expect(bridge.match(playerMovings)).toEqual({ bridgeMap, checking });
    },
  );
});
