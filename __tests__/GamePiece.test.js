const GamePiece = require('../src/model/GamePiece');
const { ERROR } = require('../src/utils/constants');

describe('유효하지 않은 이동할 칸 입력 시 예외가 발생되는지 테스트한다.', () => {
  test.each([['1'], ['12'], ['123'], ['1234'], ['0']])('숫자가 포함된 입력이라면 예외가 발생한다.', moving => {
    expect(() => {
      const gamePiece = new GamePiece(moving);
    }).toThrow(ERROR.read_moving_error);
  });

  test.each([[''], [' '], ['  '], ['   ']])('공백 문자열이라면 예외가 발생한다.', moving => {
    expect(() => {
      const gamePiece = new GamePiece(moving);
    }).toThrow(ERROR.read_moving_error);
  });

  test.each([['A'], ['B'], ['C'], ['X'], ['O']])('U 또는 D 이외의 문자라면 예외가 발생한다.', moving => {
    expect(() => {
      const gamePiece = new GamePiece(moving);
    }).toThrow(ERROR.read_moving_error);
  });

  test.each([['UP'], ['Up'], ['up'], ['Down'], ['DOWN'], ['down']])('문자열 입력이라면 예외가 발생한다.', moving => {
    expect(() => {
      const gamePiece = new GamePiece(moving);
    }).toThrow(ERROR.read_moving_error);
  });

  test.each([['u'], ['d']])('소문자 입력이라면 예외가 발생한다.', moving => {
    expect(() => {
      const gamePiece = new GamePiece(moving);
    }).toThrow(ERROR.read_moving_error);
  });
});

describe('유효한 이동할 칸 입력 시 예외가 발생되지 않는지 테스트한다.', () => {
  test.each([['U'], ['D']])('U 또는 D가 입력된다면 예외가 발생하지 않는다.', moving => {
    expect(() => {
      const gamePiece = new GamePiece(moving);
    }).not.toThrow(ERROR.read_moving_error);
  });
});
