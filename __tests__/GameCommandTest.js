const GameCommandValidator = require('../src/validator/GameCommandValidator');

describe('재시도 여부 입력값 유효성 테스트', () => {
  test('값을 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new GameCommandValidator('');
    }).toThrow('[ERROR] 값을 입력해야 합니다.');
  });
  test.each(['QQ', 'RR', 'q', 'r', 'ㅂ', 'ㄱ', 'ㅃ', 'ㄲ'])('U, D를 입력하지 않으면 예외가 발생한다.', () => {
    expect((input) => {
      new GameCommandValidator(input);
    }).toThrow('[ERROR] Q or R 를 입력해야 합니다.');
  });
});
