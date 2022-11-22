const Map = require('../src/Map');
const map = new Map();

describe('지도 생성 테스트', () => {
  test('U,D로 구성된 다리를 O,X 지도로 변환한다.', () => {
    expect(map.makeOriginBridgeMap(['U', 'D', 'D', 'U'])).toEqual([
      ['O', 'X', 'X', 'O'],
      ['X', 'O', 'O', 'X'],
    ]);
  });

  test('U,D로 구성된 다리의 아래 부분만 O,X 지도로 변환한다.', () => {
    expect(map.makeLowerBridge(['U', 'D', 'D', 'U'])).toEqual([
      'X',
      'O',
      'O',
      'X',
    ]);
  });

  test('U,D로 구성된 다리의 윗 부분만 O,X 지도로 변환한다.', () => {
    expect(map.makeUpperBridge(['U', 'D', 'D', 'U'])).toEqual([
      'O',
      'X',
      'X',
      'O',
    ]);
  });
});
