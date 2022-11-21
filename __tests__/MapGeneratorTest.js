const MapGenerator = require('../src/MapGenerator');

describe('MapGenerator 클래스 테스트', () => {
  // 기본 설정
  const mapGenerator = new MapGenerator();

  test('기호 목록을 받아 지도를 반환하는 generateMap 메서드 검증', () => {
    // 설정
    const symbol = ['O', 'O', 'X'];
    const map = '[ O | O | X ]';

    // 실행
    const test = mapGenerator.generateMap(symbol);

    // 검증
    expect(test).toEqual(map);
  });

  test('결과값을 받아 지도 목록을 반환하는 generate 메서드 검증', () => {
    // 설정
    const result = [
      ['U', true],
      ['D', true],
      ['U', false],
    ];
    const mapList = ['[ O |   | X ]', '[   | O |   ]'];

    // 실행
    const test = mapGenerator.generate(result);

    // 검증
    expect(test).toEqual(mapList);
  });
});
