/* eslint-disable */

const GameCommandValidation = require('../src/model/GameCommandValidation');

describe('다리 길이 테스트', () => {
  test.each(['r', 'q', 'qq', '0', '1'])('범위 미만의 금액에 대한 예외처리', (input) => {
    expect(() => {
      new GameCommandValidation(input).showValidationResult();
    }).toThrow('[ERROR]');
  });
});
