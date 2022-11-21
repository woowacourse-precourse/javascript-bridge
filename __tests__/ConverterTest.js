const {
  convertToUpDown,
  convertToBridgeMap,
} = require('../src/utils/Converter');
const { BRIDGE_MSG, COMMON } = require('../src/common/Constant');

describe('변환자 테스트', () => {
  test('1을 U로, 0을 D로 변환한다.', () => {
    const ZERO = 0;
    const ONE = 1;

    expect(convertToUpDown(ZERO)).toEqual(BRIDGE_MSG.downward);
    expect(convertToUpDown(ONE)).toEqual(BRIDGE_MSG.upward);
  });

  test('이동 정보를 다리 결과로 변환한다.', () => {
    const {
      upward,
      downward,
      leftEdge,
      divider,
      impossible,
      possible,
      rightEdge,
    } = BRIDGE_MSG;
    const { blank, newLine } = COMMON;
    const failedMovingState = [
      [upward, true],
      [upward, true],
      [downward, false],
    ];
    const successMovingState = [
      [upward, true],
      [upward, true],
      [downward, true],
    ];

    expect(convertToBridgeMap(failedMovingState)).toEqual(
      leftEdge +
        blank +
        possible +
        blank +
        divider +
        blank +
        possible +
        blank +
        divider +
        blank +
        blank +
        blank +
        rightEdge +
        newLine +
        leftEdge +
        blank +
        blank +
        blank +
        divider +
        blank +
        blank +
        blank +
        divider +
        blank +
        impossible +
        blank +
        rightEdge
    );
    expect(convertToBridgeMap(successMovingState)).toEqual(
      leftEdge +
        blank +
        possible +
        blank +
        divider +
        blank +
        possible +
        blank +
        divider +
        blank +
        blank +
        blank +
        rightEdge +
        newLine +
        leftEdge +
        blank +
        blank +
        blank +
        divider +
        blank +
        blank +
        blank +
        divider +
        blank +
        possible +
        blank +
        rightEdge
    );
  });
});
