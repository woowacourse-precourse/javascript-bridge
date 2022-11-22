const { ERROR_MESSAGE } = require('../src/constants');
const { runException, mockRandoms } = require('../src/utils/testUtils');

describe('입력값 예외 처리 테스트', () => {
  test.each([
    [['a'], ERROR_MESSAGE.INPUT_NUM],
    [[2], ERROR_MESSAGE.BRIDGE_SIZE],
    [[21], ERROR_MESSAGE.BRIDGE_SIZE],
  ])('다리 길이가 3 이상 20 이하가 아닌 경우 예외 처리한다.', (input, error) => {
    runException(input, error);
  });

  test.each([
    [['3', 0], ERROR_MESSAGE.INPUT_STR],
    [['3', 'U '], ERROR_MESSAGE.INPUT_BLANK],
    [['3', 'A'], ERROR_MESSAGE.MOVING],
  ])('이동할 칸이 위(U) 또는 아래(D)가 아닌 경우 예외 처리한다.', (input, error) => {
    runException(input, error);
  });

  test.each([
    [['3', 'U', 'D', 'D', 0], ERROR_MESSAGE.INPUT_STR],
    [['3', 'U', 'D', 'D', ' Q'], ERROR_MESSAGE.INPUT_BLANK],
    [['3', 'U', 'D', 'D', 'W'], ERROR_MESSAGE.COMMNAD],
  ])('명령어가 재시도(R) 또는 종료 명령어(Q)가 아닌 경우 예외 처리한다.', (input, error) => {
    mockRandoms([1, 0, 1]);
    runException(input, error);
  });
});
