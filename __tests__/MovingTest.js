const MovingValidator = require('../src/validator/MovingValidator');

describe('이동 칸 입력값 유효성 테스트', () => {
  test('값을 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new MovingValidator('');
    }).toThrow('[ERROR] 값을 입력해야 합니다.');
  });
  test.each(['UU', 'DD', 'u', 'd', 'ㅕ', 'ㅇ'])('U, D를 입력하지 않으면 예외가 발생한다.', () => {
    expect((input) => {
      new MovingValidator(input);
    }).toThrow('[ERROR] U or D 를 입력해야 합니다.');
  });
});
