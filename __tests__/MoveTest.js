const MoveValidation = require('../src/Validation/MoveValidation');

describe('유저 이동 테스트', () => {
  test('U 또는 D가 아닌경우', () => {
    expect(() => {
      MoveValidation('W');
    }).toThrow('[ERROR]');
  });
  test('소문자인 경우', () => {
    expect(() => {
      MoveValidation('d');
    }).toThrow('[ERROR]');
  });
});
