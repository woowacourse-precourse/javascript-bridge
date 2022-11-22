const Validation = require('../src/modules/Validation');

describe('예외 처리 테스트', () => {
  test('유저의 움직임이 소문자면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateMoving('u');
    }).toThrow('[ERROR]');
  });

  test('유저의 움직임이 목록값을 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateMoving('J');
    }).toThrow('[ERROR]');
  });

  test('유저의 command가 소문자면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateCommand('r');
    }).toThrow('[ERROR]');
  });

  test('유저의 command가 목록값을 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateCommand('a');
    }).toThrow('[ERROR]');
  });

  test('다리길이가 문자열이면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateSize('a');
    }).toThrow('[ERROR]');
  });

  test('다리길이가 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateSize(1);
    }).toThrow('[ERROR]');
  });
});
