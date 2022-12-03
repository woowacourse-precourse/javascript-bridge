const BRIDGE_PRINT = require("../lib/Bridge");
const { BRIDGE, GAME } = require("../lib/Const");

class BridgeGameShape {
  #currentShape;

  getCurrentBridgeGameShape(bridgeArr, status) {
    const upShape = this.makeUpShape(bridgeArr, status);
    const downShape = this.makeDownShape(bridgeArr, status);
    this.#currentShape = upShape + "\n" + downShape;
    return this;
  }

  makeUpShape(bridgeArr, status) {
    let arr;
    if (status === GAME.STATUS.PLAY || status === GAME.STATUS.END)
      arr = this.upBridgeShape(bridgeArr);
    if (status === GAME.STATUS.FAIL)
      arr = this.upBridgeShapeWhenFail(bridgeArr);
    const upShape = `${BRIDGE_PRINT.START}${arr.join(BRIDGE_PRINT.DIVISION)}${
      BRIDGE_PRINT.END
    }`;
    return upShape;
  }

  upBridgeShape(bridgeArr) {
    return bridgeArr.map((direction) => {
      if (direction === BRIDGE.DOWN.SHAPE) return BRIDGE_PRINT.BLANK;
      if (direction === BRIDGE.UP.SHAPE) return BRIDGE_PRINT.CAN_MOVE;
    });
  }

  upBridgeShapeWhenFail(bridgeArr) {
    const resultArr = this.upBridgeShape(bridgeArr);
    const print = resultArr.pop();
    if (print === BRIDGE_PRINT.BLANK) resultArr.push(BRIDGE_PRINT.CANT_MOVE);
    if (print === BRIDGE_PRINT.CAN_MOVE) resultArr.push(BRIDGE_PRINT.BLANK);
    return resultArr;
  }

  makeDownShape(bridgeArr, status) {
    let arr;
    if (status === GAME.STATUS.PLAY || status === GAME.STATUS.END)
      arr = this.downBridgeShape(bridgeArr);
    if (status === GAME.STATUS.FAIL)
      arr = this.downBridgeShapeWhenFail(bridgeArr);
    const downShape = `${BRIDGE_PRINT.START}${arr.join(BRIDGE_PRINT.DIVISION)}${
      BRIDGE_PRINT.END
    }`;
    return downShape;
  }

  downBridgeShape(bridgeArr) {
    return bridgeArr.map((direction) => {
      if (direction === BRIDGE.UP.SHAPE) return BRIDGE_PRINT.BLANK;
      if (direction === BRIDGE.DOWN.SHAPE) return BRIDGE_PRINT.CAN_MOVE;
    });
  }

  downBridgeShapeWhenFail(bridgeArr) {
    const resultArr = this.downBridgeShape(bridgeArr);
    const print = resultArr.pop();
    if (print === BRIDGE_PRINT.BLANK) resultArr.push(BRIDGE_PRINT.CANT_MOVE);
    if (print === BRIDGE_PRINT.CAN_MOVE) resultArr.push(BRIDGE_PRINT.BLANK);
    return resultArr;
  }

  getCurrentShape() {
    return this.#currentShape;
  }
}

module.exports = BridgeGameShape;
