/* eslint-disable */
const MovementVadlidation = require('../src/model/MovementValidaion');

describe('다리 길이 테스트', () => {
  test.each(['u', 'd', '34', '4', 'go'])('범위 미만의 금액에 대한 예외처리', (input) => {
    expect(() => {
      new MovementVadlidation(input).showValidationResult();
    }).toThrow('[ERROR]');
  });
});
