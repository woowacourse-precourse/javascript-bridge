const Direction = require('../src/model/Direction');

describe('이동 방향 입력값 예외 테스트', () => {
  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction(1);
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction(20);
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction('u');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction('d');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction('UD');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction(' ');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction('');
    }).toThrow('[ERROR]');
  });

  test('U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Direction('A');
    }).toThrow('[ERROR]');
  });
});
