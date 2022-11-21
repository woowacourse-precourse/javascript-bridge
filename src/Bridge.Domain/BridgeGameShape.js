const OutputView = require("../Bridge.UI/OutputView");
const BRIDGE_PRINT = require("../lib/Bridge");
const BRIDGE = require("../lib/Const");

class BridgeGameShape {
  #currentShape;

  getCurrentBridgeGameShape(bridgeArr, result) {
    const upShape = this.makeUpShape(bridgeArr, result);
    const downShape = this.makeDownShape(bridgeArr, result);
    this.#currentShape = upShape + "\n" + downShape;
    return this;
  }

  makeUpShape(bridgeArr, result) {
    const arr = this.upBridgeShapeWithResult(bridgeArr, result);
    const UpShape = `${BRIDGE_PRINT.START}${arr.join(BRIDGE_PRINT.DIVISION)}${
      BRIDGE_PRINT.END
    }`;
    return UpShape;
  }

  upBridgeShapeWithResult(bridgeArr, result) {
    return bridgeArr.map((direction, index) => {
      if (direction === BRIDGE.UP.SHAPE) {
        if (bridgeArr.length === index + 1) {
          if (!result) return BRIDGE_PRINT.CANT_MOVE;
          if (result) return BRIDGE_PRINT.CAN_MOVE;
        }
        return BRIDGE_PRINT.CAN_MOVE;
      }
      if (direction === BRIDGE.DOWN.SHAPE) return BRIDGE_PRINT.BLANK;
    });
  }

  makeDownShape(bridgeArr, result) {
    const arr = downBridgeShapeWithResult(bridgeArr, result);
    const DownShape = `${BRIDGE_PRINT.START}${arr.join(BRIDGE_PRINT.DIVISION)}${
      BRIDGE_PRINT.END
    }`;
    return DownShape;
  }

  downBridgeShapeWithResult(bridgeArr, result) {
    return bridgeArr.map((direction, index) => {
      if (direction === BRIDGE.DOWN.SHAPE) {
        if (bridgeArr.length === index + 1) {
          if (!result) return BRIDGE_PRINT.CANT_MOVE;
          if (result) return BRIDGE_PRINT.CAN_MOVE;
        }
        return BRIDGE_PRINT.CAN_MOVE;
      }
      if (direction === BRIDGE.UP.SHAPE) return BRIDGE_PRINT.BLANK;
    });
  }

  OutputResultMap() {
    OutputView.printMap(this.#currentShape);
    return;
  }
}

module.exports = BridgeGameShape;
