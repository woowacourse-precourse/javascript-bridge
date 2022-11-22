const Retry = require('../src/model/Retry');

describe('재시도 입력값 예외 테스트', () => {
  test('R 또는 Q가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry(1);
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry(20);
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry('r');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry('q');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry('RQ');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry(' ');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry('');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Retry('A');
    }).toThrow('[ERROR]');
  });
});
