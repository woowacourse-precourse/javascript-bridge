/* eslint-disable max-lines-per-function */
const MovingHistory = require('../src/models/MovingHistory');

describe('MovingHistory 테스트', () => {
  test.each([
    [0, 'U', ['[ O ]', '[   ]']],
    [1, 'D', ['[ O |   ]', '[   | O ]']],
    [2, 'D', ['[ O |   |   ]', '[   | O | X ]']],
  ])(
    'toString 메서드는 다리 건너기 결과를 문자열로 반환',
    (stage, moving, expected) => {
      const bridge = ['U', 'D', 'U'];

      MovingHistory.log(bridge, stage, moving);
      const movingHistory = MovingHistory.toString();

      expected.forEach((row) => expect(movingHistory).toContain(row));
    },
  );
});
