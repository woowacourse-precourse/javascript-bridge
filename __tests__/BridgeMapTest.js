const BridgeMap = require('../src/models/BridgeMap');

describe('다리 맵 모델 테스트', () => {
  test('다리의 맵을 업데이트하고 맵을 배열을 반환', () => {
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
    const bridge = new BridgeMap();

    directions.forEach((direction, idx) => {
      expect(bridge.updateMap(direction, elems[idx])).toEqual(results[idx]);
    });
  });
});
