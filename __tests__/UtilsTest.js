const { isValidateBridgeSize } = require('../src/utils/validation');

describe('유틸 함수 테스트', () => {
  test('다리 길이 유효성 검사 테스트', () => {
    const input = '1';
    expect(() => {
      isValidateBridgeSize(input);
    }).toThrowError('다리 길이는 3이상 20이하의 숫자입니다.');
  });

  test('다리 길이 유효성 검사 테스트', () => {
    const input = 's';
    expect(() => {
      isValidateBridgeSize(input);
    }).toThrowError('다리 길이는 숫자만 입력할 수 있습니다.');
  });
});
