const BridgeSize = require('../src/model/BridgeSize');

describe('다리 사이즈 예외 테스트', () => {
  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(1);
    }).toThrow('[ERROR]');
  });

  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(2);
    }).toThrow('[ERROR]');
  });

  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(21);
    }).toThrow('[ERROR]');
  });

  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(100);
    }).toThrow('[ERROR]');
  });

  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(-10);
    }).toThrow('[ERROR]');
  });

  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(0);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize();
    }).toThrow('[ERROR]');
  });

  test('숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(' ');
    }).toThrow('[ERROR]');
  });

  test('숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize('a');
    }).toThrow('[ERROR]');
  });

  test('숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize([1]);
    }).toThrow('[ERROR]');
  });

  test('정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(5.5);
    }).toThrow('[ERROR]');
  });
});
