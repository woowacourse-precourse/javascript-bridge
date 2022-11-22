const BridgeGame = require('../src/BridgeGame');

describe('맵(다리 건너기 결과) 생성 테스트', () => {
  test.each([
    [
      ['U', 'U', 'D'],
      [
        ['[ O ]', '[   ]'],
        ['[ O | O ]', '[   |   ]'],
        ['[ O | O |   ]', '[   |   | O ]'],
      ],
    ],
    [
      ['U', 'U', 'U'],
      [
        ['[ O ]', '[   ]'],
        ['[ O | O ]', '[   |   ]'],
        ['[ O | O | X ]', '[   |   |   ]'],
      ],
    ],
  ])('다리를 건너면 결과를 맵으로 생성한다.', (movings, maps) => {
    const bridge = ['U', 'U', 'D'];

    const brigeGame = new BridgeGame();
    brigeGame.saveBridge(bridge);

    movings.forEach((moving, idx) => {
      brigeGame.move(moving);
      const map = brigeGame.getMap();
      expect(map).toEqual(maps[idx]);
    });
  });
});
