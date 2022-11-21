const Validator = require('../src/Validator');

describe('Validator 테스트', () => {
  test('정수가 아니면 예외가 발생한다.', () => {
    const input = '3.0';
    expect(() => {
      Validator.checkBridgeSize(input);
    }).toThrow();
  });

  test('다리 길이가 3 미만이면 예외가 발생한다.', () => {
    const input = '2';
    expect(() => {
      Validator.checkBridgeSize(input);
    }).toThrow();
  });

  test('다리 길이가 20 초과면 예외가 발생한다.', () => {
    const input = '21';
    expect(() => {
      Validator.checkBridgeSize(input);
    }).toThrow();
  });

  test('U 와 D 중 한 글자가 아니면 예외가 발생한다.', () => {
    const inputList = ['UU', 'DD', 'U ', 'S'];
    inputList.forEach((input) => {
      expect(() => {
        Validator.checkBridgeSize(input);
      }).toThrow();
    });
  });

  test('R 과 Q 중 한 글자가 아니면 예외가 발생한다.', () => {
    const inputList = ['RR', 'QQ', 'R ', 'S'];
    inputList.forEach((input) => {
      expect(() => {
        Validator.checkBridgeSize(input);
      }).toThrow();
    });
  });
});
