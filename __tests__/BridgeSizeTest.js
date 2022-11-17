const BridgeSizeValidator = require('../src/validator/BridgeSizeValidator');

describe('다리 길이 입력값 유효성 테스트', () => {
  test('다리 길이를 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSizeValidator('');
    }).toThrow('[ERROR] 값을 입력해야 합니다.');
  });
  test.each(['a', '!', 'ㄱ', 'ㅏ', '1a2b'])('다리 길이에 숫자를 입력하지 않으면 예외가 발생한다.', () => {
    expect((input) => {
      new BridgeSizeValidator(input);
    }).toThrow('[ERROR] 숫자만 입력해야 합니다.');
  });
  test('다리 길이에 3이상 20이하 숫자를 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSizeValidator('2');
    }).toThrow('[ERROR] 3이상 20이하 숫자를 입력해야 합니다.');
  });
});
