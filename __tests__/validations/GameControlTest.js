const GameControlValidation = require('../../src/validations/GameControl');

describe('GameControlValidation', () => {
  test('게임 재시작/종료 여부가 R 또는 Q가 아닐 경우 예외를 던진다.', () => {
    expect(() => {
      GameControlValidation.validate('A');
    }).toThrow();
  });
});
