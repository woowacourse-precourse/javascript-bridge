const { READ_TYPE } = require('../src/constants');
const ExceptionHandler = require('../src/utils/ExceptionHandler');

describe('예외 처리', () => {
  describe('다리 길이 입력', () => {
    test('빈칸을 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('', READ_TYPE.BRIDGE_SIZE)).toBeFalsy();
    });

    test('문자를 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('a', READ_TYPE.BRIDGE_SIZE)).toBeFalsy();
    });

    test('범위를 벗어난 숫자를 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('1', READ_TYPE.BRIDGE_SIZE)).toBeFalsy();
    });
  });

  describe('이동할 칸 입력', () => {
    test('빈칸을 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('', READ_TYPE.MOVING)).toBeFalsy();
    });

    test('숫자를 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('1', READ_TYPE.MOVING)).toBeFalsy();
    });

    test('여러 값을 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('UU', READ_TYPE.MOVING)).toBeFalsy();
    });

    test('U, D가 아닌 다른 문자를 입력하면 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('A', READ_TYPE.MOVING)).toBeFalsy();
    });
  });

  describe('이동할 수 없는 칸일 때, 재질문', () => {
    test('빈칸을 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('', READ_TYPE.GAME_COMMAND)).toBeFalsy();
    });

    test('여러 값을 입력했을 때 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('RR', READ_TYPE.MOVING)).toBeFalsy();
    });

    test('R, Q가 아닌 다른 문자를 입력하면 예외가 발생하며 False 값을 반환한다.', () => {
      expect(ExceptionHandler.tryValidate('A', READ_TYPE.MOVING)).toBeFalsy();
    });
  });
});
