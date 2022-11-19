const {
  isValidateBridgeSize,
  isValidateDirection,
} = require('../src/utils/validation');

describe('유틸 함수 테스트', () => {
  test('다리 길이 유효성 검사 테스트', () => {
    const input = '1';
    expect(() => {
      isValidateBridgeSize(input);
    }).toThrow('[ERROR] 다리 길이는 3이상 20이하의 숫자입니다.');
  });

  test('다리 길이 유효성 검사 테스트', () => {
    const input = 's';
    expect(() => {
      isValidateBridgeSize(input);
    }).toThrow('[ERROR] 다리 길이는 숫자만 입력할 수 있습니다.');
  });

  test('사용자 이동 유효성 검사 테스트', () => {
    const input = 'X';
    expect(() => {
      isValidateDirection(input);
    }).toThrow('[ERROR] U 또는 D만 입력할 수 있습니다.');
  });
});
