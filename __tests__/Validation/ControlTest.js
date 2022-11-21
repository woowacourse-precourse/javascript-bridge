const ControlValidation = require('../../src/Validation/ControlValidation');

describe('게임 재시작 테스트', () => {
  test('R 또는 Q가 아닌경우', () => {
    expect(() => {
      ControlValidation('W');
    }).toThrow('[ERROR]');
  });
  test('소문자인 경우', () => {
    expect(() => {
      ControlValidation('r');
    }).toThrow('[ERROR]');
  });
});
