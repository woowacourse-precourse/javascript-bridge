const { validateBridgeSize } = require('../src/utils/validations');

describe('다리 생성 시 사용자 입력 예외 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize('제일 길게 만들어 주세요.');
    }).toThrow('[ERROR] 숫자로 입력해주세요.');
  });

  test('3에서 20 사이가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize(2);
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });

  test('3에서 20 사이가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize(21);
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });

  test('소수점을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      validateBridgeSize(19.5);
    }).toThrow('[ERROR] 소수점은 입력할 수 없습니다.');
  });
});
