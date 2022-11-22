const OutputView = require("../view/OutputView");
const { BRIDGE, DIRECTION } = require("../utils/constants");

class BridgeMap {
  static upBridge = BRIDGE.INITIAL;
  static downBridge = BRIDGE.INITIAL;

  static createMap(gameInfo, readFuncs) {
    gameInfo.gameState.forEach(([moving, gameResult], index) => {
      this.buildBridge(moving, gameResult);

      this.completeBridge(index === gameInfo.gameState.length - 1);
    });

    const mapInfo = this.createMapInfo(gameInfo);
    this.resetBridge();

    OutputView.printMap(mapInfo, readFuncs);
  }

  static buildBridge(moving, gameResult) {
    if (moving === DIRECTION.UP) {
      this.upBridge += `${gameResult} `;
      this.downBridge += BRIDGE.NO_RESULT;
    }

    if (moving === DIRECTION.DOWN) {
      this.downBridge += `${gameResult} `;
      this.upBridge += BRIDGE.NO_RESULT;
    }
  }

  static completeBridge(isEndOfBridge) {
    if (isEndOfBridge) {
      this.upBridge += BRIDGE.END;
      this.downBridge += BRIDGE.END;
    } else {
      this.upBridge += BRIDGE.NOT_END;
      this.downBridge += BRIDGE.NOT_END;
    }
  }

  static resetBridge() {
    this.upBridge = BRIDGE.INITIAL;
    this.downBridge = BRIDGE.INITIAL;
  }

  static createMapInfo({ gameState, originBridgeSize, tryCount }) {
    const lastGameState = gameState.slice(-1)[0];

    return {
      map: `${this.upBridge}\n${this.downBridge}`,
      lastResult: lastGameState[1],
      originBridgeSize,
      currentBridgeSize: gameState.length,
      tryCount,
    };
  }
}

module.exports = BridgeMap;
