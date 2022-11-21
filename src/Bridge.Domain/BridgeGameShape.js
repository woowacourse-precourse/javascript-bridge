const OutputView = require("../Bridge.UI/OutputView");
const BRIDGE_PRINT = require("../lib/Bridge");
const BRIDGE = require("../lib/Const");

class BridgeGameShape {
  #currentShape;

  getCurrentBridgeGameShape(bridgeArr, direction, result) {
    return this;
  }

  makeUpShape(bridgeArr, result) {
    const arr = bridgeArr.map((direction) => {
      if (direction === BRIDGE.UP.SHAPE) {
        if (result) return BRIDGE_PRINT.CAN_MOVE;
        if (!result) return BRIDGE_PRINT.CANT_MOVE;
      }
      if (direction === BRIDGE.DOWN.SHAPE) return BRIDGE_PRINT.BLANK;
    });
    const UpShape = `${BRIDGE_PRINT.START}${arr.join(BRIDGE_PRINT.DIVISION)}${
      BRIDGE_PRINT.END
    }`;
    return UpShape;
  }

  makeDownShape(bridgeArr, result) {
    const arr = bridgeArr.map((direction) => {
      if (direction === BRIDGE.DOWN.SHAPE) {
        if (result) return BRIDGE_PRINT.CAN_MOVE;
        if (!result) return BRIDGE_PRINT.CANT_MOVE;
      }
      if (direction === BRIDGE.UP.SHAPE) return BRIDGE_PRINT.BLANK;
    });
    const DownShape = `${BRIDGE_PRINT.START}${arr.join(BRIDGE_PRINT.DIVISION)}${
      BRIDGE_PRINT.END
    }`;
    return DownShape;
  }

  OutputResultMap() {
    OutputView.printMap(this.#currentShape);
    return;
  }
}

module.exports = BridgeGameShape;
