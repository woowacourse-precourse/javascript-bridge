/* eslint-disable max-lines-per-function */
const MapGenerator = require('../src/models/MapGenerator');

describe('MapGenerator 테스트', () => {
  test('toString 메서드는 다리 건너기 결과를 문자열로 반환', () => {
    const mapGenerator = new MapGenerator();
    const bridge = ['U', 'D', 'D'];
    const moving = ['U', 'D', 'D'];

    moving.forEach((move, stage) => mapGenerator.generate(bridge, stage, move));
    const map = mapGenerator.toString();
    const expected = ['[ O |   |   ]', '[   | O | O ]'];

    expect(map).toEqual(expect.arrayContaining(expected));
  });
});
