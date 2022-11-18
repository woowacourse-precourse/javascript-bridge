const { PRINTABLE_BRIDGE } = require('./constants/values');

const PrintableBridgeMaker = {
  generate({ upBridge, downBridge }) {
    const printableUpBridge = this.addSquareBracket(this.addSpaceLineInBridge(upBridge));
    const printableDownBridge = this.addSquareBracket(this.addSpaceLineInBridge(downBridge));

    return `\n${printableUpBridge}\n${printableDownBridge}`;
  },

  addSpaceLineInBridge(bridge) {
    return bridge.join(PRINTABLE_BRIDGE.SPACE_LINE);
  },

  addSquareBracket(bridge) {
    return `${PRINTABLE_BRIDGE.BEGIN}${bridge}${PRINTABLE_BRIDGE.END}`;
  },
};

module.exports = PrintableBridgeMaker;
