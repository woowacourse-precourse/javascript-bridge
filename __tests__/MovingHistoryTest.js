/* eslint-disable max-lines-per-function */
const MovingHistory = require('../src/models/MovingHistory');

describe('MovingHistory 테스트', () => {
  test('toString 메서드는 다리 건너기 결과를 문자열로 반환', () => {
    const bridge = ['U', 'D', 'D'];
    const moving = ['U', 'D', 'D'];

    moving.forEach((move, stage) => MovingHistory.log(bridge, stage, move));
    const movingHistory = MovingHistory.toString();
    const expected = ['[ O |   |   ]', '[   | O | O ]'];

    expect(movingHistory).toEqual(expect.arrayContaining(expected));
  });
});
