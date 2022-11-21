const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { SPACE_TO_MOVE, OUTPUT_MESSAGE } = require("./Utils");

const BridgeSet = {
  overBridge: [],
  underBridge: [],

  repeat() {
    InputView.readMoving();
  },

  BridgePass(moving) {
    if(moving === SPACE_TO_MOVE.MOVE_UP) {
      BridgeSet.overBridgePass();
    }
    if(moving === SPACE_TO_MOVE.MOVE_DOWN) {
      BridgeSet.underBridgePass();
    }
    return OutputView.printMap(this.overBridge, this.underBridge);
  },

  BridgeFail(moving) {
    if(moving === SPACE_TO_MOVE.MOVE_UP) {
      BridgeSet.overBridgefail();
    }
    if(moving === SPACE_TO_MOVE.MOVE_DOWN) {
      BridgeSet.underBridgefail();
    }
    return OutputView.printMap(this.overBridge, this.underBridge);
  },

  overBridgePass() {
    if(this.overBridge.length === 0 && this.underBridge.length === 0) {
      this.overBridge.push(OUTPUT_MESSAGE.MOVE_SUCCESS);
      this.underBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
    if(this.overBridge.length > 0 && this.underBridge.length > 0) {
      this.overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_SUCCESS);
      this.underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
  },
  
  underBridgePass() {
    if(this.overBridge.length === 0 && this.underBridge.length === 0) {
      this.overBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
      this.underBridge.push(OUTPUT_MESSAGE.MOVE_SUCCESS);
    }
    if(this.overBridge.length > 0 && this.underBridge.length > 0) {
      this.overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
      this.underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_SUCCESS);
    }
  },

  overBridgefail() {
    if(this.overBridge.length === 0 && this.underBridge.length === 0) {
      this.overBridge.push(OUTPUT_MESSAGE.MOVE_FAILURE);
      this.underBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
    if(this.overBridge.length > 0 && this.underBridge.length > 0) {
      this.overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_FAILURE);
      this.underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
    }
  },

  underBridgefail() {
    if(this.overBridge.length === 0 && this.underBridge.length === 0) {
      this.overBridge.push(OUTPUT_MESSAGE.BRIDGE_EMPTY);
      this.underBridge.push(OUTPUT_MESSAGE.MOVE_FAILURE);
    }
    if(this.overBridge.length > 0 && this.underBridge.length > 0) {
      this.overBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.BRIDGE_EMPTY);
      this.underBridge.push(OUTPUT_MESSAGE.BRIDGE_BETWEEN + OUTPUT_MESSAGE.MOVE_FAILURE);
    }
  },
}


module.exports = BridgeSet;