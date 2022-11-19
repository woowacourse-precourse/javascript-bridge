const Validation = require('../src/Validation');
const { ERROR_MESSAGE } = require('../src/Constants');

describe('다리 길이 예외 테스트', () => {
  test('다리 길이가 양의 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validation.bridgeSize(5.5);
    }).toThrow('[ERROR] 다리 길이는 양의 정수여야 합니다.');
  });

  test('다리 길이가 3과 20 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validation.bridgeSize(21);
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });
});

describe('이동할 칸에 대한 입력 예외 테스트', () => {
  test('입력이 U 또는 D가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validation.moving('A');
    }).toThrow(ERROR_MESSAGE.MOVING);
  });
});
