const Validator = require('../src/Validator');

describe('유효성 검사 테스트', () => {
  test.each([-1, 0, 2, 21])('다리 길이가 3 이상 20 이하가 아닐 경우 예외가 발생한다.', (input) => {
    expect((input) => {
      Validator.validateBridgeLength(input);
    }).toThrow('[ERROR]');
  });
});
