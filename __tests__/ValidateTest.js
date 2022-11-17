const { validateBridgeSize, checkMoveString } = require('../src/Validate');

describe('다리 길이 입력에 대한 유효성 검사', () => {
  test('다리 길이 숫자인지 테스트', () => {
    expect(() => {
      validateBridgeSize('가');
    }).toThrow('[ERROR]');
  });

  test('다리의 길이 3이상 20이하 범위 테스트', () => {
    expect(() => {
      validateBridgeSize('1');
    }).toThrow('[ERROR]');
  });

  test('플레이어가 입력한 문자가 U 또는 D 인지 유효성 검사', () => {
    expect(() => {
      checkMoveString('u');
    }).toThrow('[ERROR]');
  });
});
