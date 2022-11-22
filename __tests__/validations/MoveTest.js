const MoveValidation = require('../../src/validations/Move');

describe('MoveValidation', () => {
  test('U 또는 D가 아닐 경우 예외를 던진다.', () => {
    expect(() => {
      MoveValidation.validate('A');
    }).toThrow();
  });
});
