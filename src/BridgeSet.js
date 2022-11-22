const OutputView = require("./OutputView");
const { SPACE_TO_MOVE, OUTPUT_MESSAGE, GAME_RESULT } = require("./Utils");

const BridgeSet = {

  bridgePass(moving, overBridge, underBridge) {
    if(moving === SPACE_TO_MOVE.MOVE_UP) {
      return this.overBridgePass(overBridge, underBridge);
    }
    if(moving === SPACE_TO_MOVE.MOVE_DOWN) {
      return this.underBridgePass(overBridge, underBridge);
    }
  },

  bridgeFail(moving, overBridge, underBridge) {
    if(moving === SPACE_TO_MOVE.MOVE_UP) {
      return this.overBridgefail(overBridge, underBridge);
    }
    if(moving === SPACE_TO_MOVE.MOVE_DOWN) {
      return this.underBridgefail(overBridge, underBridge);
    }
  },

  overBridgePass(overBridge, underBridge) {
    if(overBridge.length > 0 && underBridge.length > 0) {
      overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_SUCCESS);
      underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
    if(overBridge.length === 0 && underBridge.length === 0) {
      overBridge.push(OUTPUT_MESSAGE.MOVE_SUCCESS);
      underBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
  },

  underBridgePass(overBridge, underBridge) {
    if(overBridge.length > 0 && underBridge.length > 0) {
      overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
      underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_SUCCESS);
    }
    if(overBridge.length === 0 && underBridge.length === 0) {
      overBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
      underBridge.push(OUTPUT_MESSAGE.MOVE_SUCCESS);
    }
  },

  overBridgefail(overBridge, underBridge) {
    if(overBridge.length > 0 && underBridge.length > 0) {
      overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_FAILURE);
      underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
    if(overBridge.length === 0 && underBridge.length === 0) {
      overBridge.push(OUTPUT_MESSAGE.MOVE_FAILURE);
      underBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
  },

  underBridgefail(overBridge, underBridge) {
    if(overBridge.length > 0 && underBridge.length > 0) {
      overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
      underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_FAILURE);
    }
    if(overBridge.length === 0 &&underBridge.length === 0) {
      overBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
      underBridge.push(OUTPUT_MESSAGE.MOVE_FAILURE);
    }
  },

  

  beforeBridge() {
    this.overBridge.pop();
    this.underBridge.pop();
    return OutputView.printMap(this.overBridge, this.underBridge);
  },

  successEnd(tryCount) {
    OutputView.printResult(GAME_RESULT.SUCCESS, tryCount);
    this.overBridge = [];
    this.underBridge = [];
  },

  failureEnd(tryCount) {
    OutputView.printResult(GAME_RESULT.FAILURE, tryCount);
    this.overBridge = [];
    this.underBridge = [];
  }
}


module.exports = BridgeSet;