const { BRIDGE_MSG, COMMON } = require('./Constant');
const { leftEdge, divider, downward, impossible, possible, rightEdge, upward } =
  BRIDGE_MSG;
const { blank, newLine } = COMMON;
const LEFT_EDGE = leftEdge + blank;
const RIGHT_EDGE = blank + rightEdge;
const DIVIDER = blank + divider + blank;

const Converter = {
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
