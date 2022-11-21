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

  convertToBridgeMap(movingState) {
    return [
      Converter.convertToBridgeLine(movingState, upward),
      Converter.convertToBridgeLine(movingState, downward),
    ].join(newLine);
  },

  convertToBridgeLine(movingState, point) {
    return (
      LEFT_EDGE +
      movingState
        .map(([dir, isPossible]) =>
          dir === point ? (isPossible ? possible : impossible) : blank
        )
        .join(DIVIDER) +
      RIGHT_EDGE
    );
  },
};

module.exports = Converter;
