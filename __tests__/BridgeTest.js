const Bridge = require('../src/Bridge');

describe('Bridge 클래스 단위 테스트', () => {
  test('다리 길이에 숫자가 아닌 값이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Bridge('a');
    }).toThrow('[ERROR]');
  });

  test('다리 길이가 3보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Bridge('2');
    }).toThrow('[ERROR]');
  });

  test('다리 길이가 20보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Bridge('22');
    }).toThrow('[ERROR]');
  });
});
