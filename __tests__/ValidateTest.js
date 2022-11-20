const Validate = require('../src/Validate');

describe('다리 길이 예외 테스트', () => {
  test('3 이상 20 이하가 아닌 경우', () => {
    expect(Validate.checkBridgeSize(1)).toBe(false);
  });

  test('숫자가 아닌 경우', () => {
    expect(Validate.checkBridgeSize(NaN)).toBe(false);
  });
});

describe('이동 키 예외 테스트', () => {
  test('소문자가 들어올 경우', () => {
    expect(Validate.checkMovingKey('u')).toBe(false);
  });

  test('U 또는 D가 아닌 경우', () => {
    expect(Validate.checkMovingKey('A')).toBe(false);
  });

  test('특수문자가 들어온 경우', () => {
    expect(Validate.checkMovingKey('!')).toBe(false);
  });

  test('공백이 들어온 경우', () => {
    expect(Validate.checkMovingKey(' ')).toBe(false);
  });
});

describe('명령 키 예외 테스트', () => {
  test('소문자가 들어올 경우', () => {
    expect(Validate.checkCommandKey('r')).toBe(false);
  });

  test('R 또는 Q가 아닌 경우', () => {
    expect(Validate.checkCommandKey('A')).toBe(false);
  });

  test('특수문자가 들어온 경우', () => {
    expect(Validate.checkCommandKey('!')).toBe(false);
  });

  test('공백이 들어온 경우', () => {
    expect(Validate.checkCommandKey(' ')).toBe(false);
  });
});
