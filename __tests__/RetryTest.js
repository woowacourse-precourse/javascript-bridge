const RetryValidation = require('../src/utils/RetryValidation');

describe('종료 / 재시작 입력 테스트', () => {
  test('입력 오류 테스트', () => {
    expect(() => {
      new RetryValidation('a');
    }).toThrow('[ERROR]');
  });
});
