const Validation = require('../src/Validation');

describe('다리 길이 유효성 테스트', () => {
  test.each([['a'], ['#'], [' ']])('다리 길이가 문자이거나 값이 없으면 예외가 발생한다.', (input) => {
    expect(() => {
      Validation.checkBridgeSize(input);
    }).toThrow('[ERROR] 숫자를 입력해야 합니다.');
  });

  test.each([['2'], ['21']])(
    '다리 길이가 3부터 20까지의 숫자가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validation.checkBridgeSize(input);
      }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  );
  test.each([['3'], ['20']])(
    '다리 길이가 올바르게 입력되면 아무 문제도 발생하지 않는다.',
    (input) => {
      expect(() => {
        Validation.checkBridgeSize(input);
      }).not.toThrow();
    }
  );
});

describe('이동할 칸 유효성 테스트', () => {
  test.each([['u'], ['d']])(
    '이동할 칸이 소문자 u나 d로 입력되면 예외가 발생한다.', 
    (input) => {
      expect(() => {
        Validation.checkMovingValue(input);
      }).toThrow('[ERROR] 대문자로 입력해주세요.')
    }
  )
  test.each([['A'], ['1'], ['@'], [''], [' ']])(
    '이동할 칸이 U나 D가 아니면 예외가 발생한다.', 
    (input) => {
      expect(() => {
        Validation.checkMovingValue(input);
      }).toThrow('[ERROR] 이동할 칸은 U나 D만 입력할 수 있습니다.')
    }
  )
  test.each([['UD'], ['UUU'], ['ABC']])(
    '이동할 칸이 2자리 이상의 문자면 예외가 발생한다.', 
    (input) => {
      expect(() => {
        Validation.checkMovingValue(input);
      }).toThrow('[ERROR] 이동할 칸은 U나 D만 입력할 수 있습니다.')
    }
  )
  test.each([['U'], ['D']])(
    '이동할 칸이 U나 D가 들어오면 아무 문제도 발생하지 않는다..', 
    (input) => {
      expect(() => {
        Validation.checkMovingValue(input);
      }).not.toThrow()
    }
  )
})
