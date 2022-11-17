const inputException = require('../src/ui/InputException');

describe('handleBridgeSizeException 테스트', () => {
  test('아무 값도 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      inputException.handleBridgeSizeException('');
    }).toThrow('[ERROR]');
  });

  test.each([[-1], [0], [1], [2], [21], [22]])(
    '범위에 속하지 않는 숫자의 경우 예외가 발생한다.',
    () => {
      expect((input) => {
        inputException.handleBridgeSizeException(input);
      }).toThrow('[ERROR]');
    }
  );

  test.each([['a'], ['abc'], ['?']])('숫자가 아닌 경우 예외가 발생한다.', () => {
    expect((input) => {
      inputException.handleBridgeSizeException(input);
    }).toThrow('[ERROR]');
  });
});
