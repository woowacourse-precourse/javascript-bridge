/* eslint-disable max-lines-per-function */
const { isBridgeSizeValid, isUserMovingInputValid, isGameCommandValid } = require('../src/utils/validation');

describe('유효 데이터 테스트', () => {
  test.each(['d', ''])('다리 생성 값이 숫자가 아닌 경우', (input) => {
    expect(() => {
      isBridgeSizeValid(input);
    }).toThrow('[ERROR]');
  });
  test.each([2, 21])('다리 길이 범위가 3이상 ~ 20 이하의 숫자가 아닌 경우', (input) => {
    expect(() => {
      isBridgeSizeValid(input);
    }).toThrow('[ERROR]');
  });
  test.each(['A', 'R', '1', 'r', ''])('명령어 검증 : 이동 명령어가 U또는 D가 아닌 경우', (input) => {
    expect(() => {
      isUserMovingInputValid(input);
    }).toThrow('[ERROR]');
  });
  test.each(['A', 'U', '1', 'r', ''])('명령어 검증 : 게임 커맨드가 R또는 Q가 아닌 경우', (input) => {
    expect(() => {
      isGameCommandValid(input);
    }).toThrow('[ERROR]');
  });
});
