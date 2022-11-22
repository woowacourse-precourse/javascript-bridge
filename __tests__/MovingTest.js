const MovingValidation = require('../src/utils/MovingValidation');

describe('다리 건너기 테스트', () => {
  test('입력 오류 테스트', () => {
    expect(() => {
      new MovingValidation('a');
    }).toThrow('[ERROR]');
  });
});
