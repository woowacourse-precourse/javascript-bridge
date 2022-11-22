const BridgeMap = require('../src/models/BridgeMap');

describe('다리 맵 모델 테스트', () => {
  test('다리의 맵을 업데이트하고 맵을 배열로 반환하는 기능 테스트', () => {
    const directions = ['U', 'D', 'U'];
    const elems = ['O', 'O', 'X'];
    const results = [
      [['O'], [' ']],
      [
        ['O', ' '],
        [' ', 'O'],
      ],
      [
        ['O', ' ', 'X'],
        [' ', 'O', ' '],
      ],
    ];
    const bridgeGame = new BridgeMap();

    directions.forEach((direction, idx) => {
      const curMap = bridgeGame.updateMap(direction, elems[idx]);
      expect(curMap).toEqual(results[idx]);
    });
  });
});
