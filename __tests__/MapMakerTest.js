const MapMaker = require('../src/MapMaker');

test('MapMaker makeMap 기능 테스트, 초기 상태대로 배열 만드는 기능', () => {
  const result = MapMaker.makeMap();
  const answer = [[], []];

  expect(result).toEqual(answer);
});
