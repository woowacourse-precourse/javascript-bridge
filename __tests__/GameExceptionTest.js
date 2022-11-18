const GameException = require('../src/GameException');

describe('handleBridgeSizeException 테스트', () => {
  test('아무 값도 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      GameException.handleBridgeSizeException('');
    }).toThrow('[ERROR]');
  });

  test.each([[-1], [0], [1], [2], [21], [22]])(
    '범위에 속하지 않는 숫자의 경우 예외가 발생한다.',
    () => {
      expect((input) => {
        GameException.handleBridgeSizeException(input);
      }).toThrow('[ERROR]');
    }
  );

  test.each([['a'], ['abc'], ['?']])('숫자가 아닌 경우 예외가 발생한다.', () => {
    expect((input) => {
      GameException.handleBridgeSizeException(input);
    }).toThrow('[ERROR]');
  });
});

describe('handleMovingException 테스트', () => {
  test.each([[''], ['A'], ['u'], ['d']])('대문자 U 또는 대문자 D가 아니면 예외가 발생한다.', () => {
    expect((input) => {
      GameException.handleMovingException(input);
    }).toThrow('[ERROR]');
  });
});
