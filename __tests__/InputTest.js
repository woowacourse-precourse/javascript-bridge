const ValidityCheck = require('../src/ValidityCheck.js');
const { ERROR_MESSAGE } = require('../src/Constant.js');

describe('Input 테스트', () => {
  test('다리 길이 유효성 테스트 - 범위1', () => {
    const bridgeSize = '1';

    expect(() => {
      ValidityCheck.checkBridgeSize(bridgeSize);
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  });

  test('다리 길이 유효성 테스트 - 범위2', () => {
    const bridgeSize = '31';

    expect(() => {
      ValidityCheck.checkBridgeSize(bridgeSize);
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_RANGE);
  });

  test('다리 길이 유효성 테스트 - 숫자 판별 (문자)', () => {
    const bridgeSize = 'R';

    expect(() => {
      ValidityCheck.checkBridgeSize(bridgeSize);
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_NUMBER);
  });

  test('다리 길이 유효성 테스트 - 숫자 판별 (특수문자)', () => {
    const bridgeSize = '!1';

    expect(() => {
      ValidityCheck.checkBridgeSize(bridgeSize);
    }).toThrow(ERROR_MESSAGE.BRIDGE_SIZE_NUMBER);
  });

  test('이동 칸 유효성 테스트 - 소문자', () => {
    const movingInfo = 'u';

    expect(() => {
      ValidityCheck.checkMovingInfo(movingInfo);
    }).toThrow(ERROR_MESSAGE.MOVING_INFO_LIMIT);
  });

  test('이동 칸 유효성 테스트 - 특수문자', () => {
    const movingInfo = '!';

    expect(() => {
      ValidityCheck.checkMovingInfo(movingInfo);
    }).toThrow(ERROR_MESSAGE.MOVING_INFO_LIMIT);
  });

  test('재시작 여부 유효성 테스트 - 소문자', () => {
    const answer = 'r';

    expect(() => {
      ValidityCheck.checkRestartOrFail(answer);
    }).toThrow(ERROR_MESSAGE.ANSWER_LIMIT);
  });

  test('재시작 여부 유효성 테스트 - 특수문자', () => {
    const answer = '!';

    expect(() => {
      ValidityCheck.checkRestartOrFail(answer);
    }).toThrow(ERROR_MESSAGE.ANSWER_LIMIT);
  });
})