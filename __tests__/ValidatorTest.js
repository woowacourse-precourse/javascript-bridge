const validator = require('../src/utils/validator');

describe('validator : 메인 유효성 검사 매서드 테스트', () => {
  test.each([[0], [2], [21], , ['글자']])(
    '다리 길이 입력값이 유효하지 않으면, 예외가 발생한다.',
    (input) => {
      expect(() => {
        validator.checkBridgeSizeInput(input);
      }).toThrow();
    }
  );

  test.each([[3], [12], [20]])(
    '다리 길이 입력값이 유효하면, 예외가 발생하지 않는다.',
    (input) => {
      expect(() => {
        validator.checkBridgeSizeInput(input);
      }).not.toThrow();
    }
  );

  test.each([['A'], ['B'], ['C']])(
    '플레이어 이동 입력값이 유효하지 않으면, 예외가 발생한다.',
    (input) => {
      expect(() => {
        validator.checkUserMovingInput(input);
      }).toThrow();
    }
  );

  test.each([['U'], ['D']])(
    '플레이어 이동 입력값이 유효하면, 예외가 발생하지 않는다.',
    (input) => {
      expect(() => {
        validator.checkUserMovingInput(input);
      }).not.toThrow();
    }
  );

  test.each([['D'], ['E'], ['F']])(
    '게임 오버가 되었을 때, 다음 동작 입력값이 유효하지 않으면, 예외가 발생한다.',
    (input) => {
      expect(() => {
        validator.checkGameOverSelect(input);
      }).toThrow();
    }
  );

  test.each([['R'], ['Q']])(
    '게임 오버가 되었을 때, 다음 동작 입력값이 유효하면, 예외가 발생하지 않는다.',
    (input) => {
      expect(() => {
        validator.checkGameOverSelect(input);
      }).not.toThrow();
    }
  );
});
