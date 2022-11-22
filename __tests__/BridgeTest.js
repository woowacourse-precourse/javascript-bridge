const Validation = require('../src/Validation');

describe('다리 길이 입력 검사 테스트', () => {
  test('다리 길이에 숫자 이외의 값을 입력하는 경우 예외가 발생한다.', () => {
    expect(() => {
      Validation.bridgeSize('3km');
    }).toThrow('[ERROR] 다리 길이는 정수를 입력해야 합니다.');
  });

  test('다리 길이가 3 ~ 20 사이가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      Validation.bridgeSize('30');
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });
});

describe('이동할 칸 입력 검사 테스트', () => {
  test('이동할 칸을 U와 D 이외의 값으로 입력하는 경우 예외가 발생한다.', () => {
    expect(() => {
      Validation.moving('u');
    }).toThrow('[ERROR] 이동할 칸은 U와 D 중 하나로 입력해야 합니다.');
  });
});