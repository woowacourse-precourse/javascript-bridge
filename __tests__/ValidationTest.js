/* eslint-disable max-lines-per-function */
const { isBridgeSizeValid, isUserMovingInputValid, isGameCommandValid } = require('../src/utils/validation');

describe('유효 데이터 테스트', () => {
  test('다리 생성 값이 숫자인가?', () => {
    expect(() => {
      const input = 'dd';
      isBridgeSizeValid(input);
    }).toThrow('[ERROR]');
  });
  test('다리 길이 범위는 3이상 ~ 20 이하의 숫자여야 한다.', () => {
    expect(() => {
      isBridgeSizeValid(2);
    }).toThrow('[ERROR]');
  });
  test('명령어 검증 : 이동 명령어가 U또는 D가 아닌 경우', () => {
    expect(() => {
      isUserMovingInputValid('Z');
    }).toThrow('[ERROR]');
  });
  test('명령어 검증 : 게임 커맨드가 R또는 Q가 아닌 경우', () => {
    expect(() => {
      isGameCommandValid('Z');
    }).toThrow('[ERROR]');
  });
});
