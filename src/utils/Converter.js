const { BRIDGE_MSG, COMMON } = require('../common/Constant');
const { leftEdge, divider, downward, impossible, possible, rightEdge, upward } =
  BRIDGE_MSG;
const { blank, newLine } = COMMON;
const LEFT_EDGE = leftEdge + blank;
const RIGHT_EDGE = blank + rightEdge;
const DIVIDER = blank + divider + blank;

/**
 * 게임 정보 출력 위해 변환하는 역할을 한다.
 */
const Converter = {
  /**
   * 1, 0을 U, D로 변환한다.
   * @param {number} number 다리 칸 번호
   * @returns {string}
   */
  convertToUpDown(number) {
    return number === 1 ? BRIDGE_MSG.upward : BRIDGE_MSG.downward;
  },

  /**
   * 이동 상태를 문자열로 변환한다.
   * @param {[string, boolean][]} movingState
   * @returns {string}
   */
  convertToBridgeMap(movingState) {
    return [
      Converter.convertToBridgeLine(upward, movingState),
      Converter.convertToBridgeLine(downward, movingState),
    ].join(newLine);
  },

  /**
   * 이동 상태를 다리 문자열 한줄로 변환한다.
   * @param {string} point 방향
   * @param {[string, boolean][]} movingState 이동 상태
   * @returns {string}
   */
  convertToBridgeLine(point, movingState) {
    return (
      LEFT_EDGE +
      movingState.map((st) => Converter.convertToSqr(st, point)).join(DIVIDER) +
      RIGHT_EDGE
    );
  },

  /**
   * 입력 방향과 상태에 따라 O, X로 변환한다.
   * @param {[string, boolean]} state
   * @param {string} point
   * @returns {string}
   */
  convertToSqr([dir, isPossible], point) {
    return dir === point ? (isPossible ? possible : impossible) : blank;
  },
};

module.exports = Converter;
