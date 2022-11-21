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
    return +number === 1 ? BRIDGE_MSG.upward : BRIDGE_MSG.downward;
  },

  /**
   *
   * @param {[string, boolean][]} movingState
   * @returns {string}
   */
  convertToBridgeMap(movingState) {
    const convertToSqr = ([dir, isPossible], point) =>
      dir === point ? (isPossible ? possible : impossible) : blank;
    const convertToBridgeLine = (point) =>
      LEFT_EDGE +
      movingState.map((el) => convertToSqr(el, point)).join(DIVIDER) +
      RIGHT_EDGE;
    return [convertToBridgeLine(upward), convertToBridgeLine(downward)].join(
      newLine
    );
  },
};

module.exports = Converter;
