const Player = require('../src/Player');

describe('Player 기능 테스트', () => {
  test('이동 경로 업데이트 테스트1', () => {
    const player = new Player();
    player.updatePath('D', ' O ');
    result = { upside: ['   '], downside: [' O '] };

    expect(player.getPath()).toEqual(result);
  });

  test('이동 경로 업데이트 테스트2', () => {
    const player = new Player();

    player.updatePath('U', ' O ');
    player.updatePath('D', ' O ');
    player.updatePath('U', ' X ');

    result = { upside: [' O ', '   ', ' X '], downside: ['   ', ' O ', '   '] };

    expect(player.getPath()).toEqual(result);
  });
});
