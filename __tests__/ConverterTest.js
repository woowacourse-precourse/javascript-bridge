const {
  convertToUpDown,
  convertToBridgeMap,
} = require('../src/utils/Converter');
const { BRIDGE_MSG, COMMON } = require('../src/common/Constant');

const { upward, downward, leftEdge, divider, impossible, possible, rightEdge } =
  BRIDGE_MSG;
const { blank, newLine } = COMMON;
const LEFT_EDGE = leftEdge + blank;
const RIGHT_EDGE = blank + rightEdge;
const DIVIDER = blank + divider + blank;

describe('변환자 테스트', () => {
  test.each([
    [0, downward],
    [1, upward],
  ])('1을 U로, 0을 D로 변환한다.', (number, dir) => {
    expect(convertToUpDown(number)).toEqual(dir);
  });

  const failMovingState = [
    [upward, true],
    [upward, true],
    [downward, false],
  ];
  const successMovingState = [
    [upward, true],
    [upward, true],
    [downward, true],
  ];
  const failString =
    LEFT_EDGE +
    possible +
    DIVIDER +
    possible +
    DIVIDER +
    blank +
    RIGHT_EDGE +
    newLine +
    LEFT_EDGE +
    blank +
    DIVIDER +
    blank +
    DIVIDER +
    impossible +
    RIGHT_EDGE;
  const successString =
    LEFT_EDGE +
    possible +
    DIVIDER +
    possible +
    DIVIDER +
    blank +
    RIGHT_EDGE +
    newLine +
    LEFT_EDGE +
    blank +
    DIVIDER +
    blank +
    DIVIDER +
    possible +
    RIGHT_EDGE;

  test.each([
    [failMovingState, failString],
    [successMovingState, successString],
  ])('이동 정보를 다리 결과로 변환한다.', (state, str) => {
    expect(convertToBridgeMap(state)).toEqual(str);
  });
});
