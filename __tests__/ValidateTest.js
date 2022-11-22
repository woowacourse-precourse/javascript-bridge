const Validate = require('../src/Validate');

describe('예외 처리 테스트', () => {
  test('다리 길이 예외 테스트 - 3보다 작을 때', () => {
    expect(() => {
      Validate.bridgeSize(2);
    }).toThrowError('[ERROR]');
  });

  test('다리 길이 예외 테스트 - 20보다 클 때', () => {
    expect(() => {
      Validate.bridgeSize(21);
    }).toThrowError('[ERROR]');
  });

  test('다리 길이 예외 테스트 - 숫자가 아닐 때', () => {
    expect(() => {
      Validate.bridgeSize('a');
    }).toThrowError('[ERROR]');
  });

  test('다리 길이 예외 테스트 - 정수가 아닐 때', () => {
    expect(() => {
      Validate.bridgeSize(5.2);
    }).toThrowError('[ERROR]');
  });

  test('다리 길이 예외 테스트 - 정상', () => {
    expect(() => {
      Validate.bridgeSize(5);
    }).not.toThrowError('[ERROR]');
  });

  test('이동 예외 테스트', () => {
    expect(() => {
      Validate.moving('a');
    }).toThrowError('[ERROR]');
  });

  test('이동 예외 테스트 - 정상', () => {
    expect(() => {
      Validate.moving('U');
    }).not.toThrowError('[ERROR]');
  });

  test('재시작 예외 테스트', () => {
    expect(() => {
      Validate.gameCommand('a');
    }).toThrowError('[ERROR]');
  });

  test('재시작 예외 테스트 - 정상', () => {
    expect(() => {
      Validate.gameCommand('R');
    }).not.toThrowError('[ERROR]');
  });

  test('에러 반환 테스트', () => {
    const result = Validate.hasError(Validate.bridgeSize, 'a');

    expect(result).toEqual(true);
  });
});
