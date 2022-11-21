const createMaps = require('../src/util/createMaps');

describe('지도 생성 테스트', () => {
  test('원하는 결과의 지도를 생성한다.', () => {
    const status = { accMoveCount: 3, curMoveCount: 3, movedRoutes: ['U', 'U', 'D'] };

    const result1 = { flag: 'GAME_OVER', status };
    const result2 = { flag: 'CONTINUE', status };
    const maps1 = [
      ['O', 'O', ' '],
      [' ', ' ', 'X'],
    ];
    const maps2 = [
      ['O', 'O', ' '],
      [' ', ' ', 'O'],
    ];

    expect(createMaps(result1)).toEqual(maps1);
    expect(createMaps(result2)).toEqual(maps2);
  });
});
