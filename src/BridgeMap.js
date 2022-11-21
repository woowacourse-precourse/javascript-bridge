const OutputView = require('./OutputView');

class BridgeMap {
  static upBridge = '[ ';
  static downBridge = '[ ';

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
    if (moving === 'U') {
      this.upBridge += `${gameResult} `;
      this.downBridge += '  ';
    }

    if (moving === 'D') {
      this.downBridge += `${gameResult} `;
      this.upBridge += '  ';
    }
  }

  static completeBridge(isEndOfBridge) {
    if (isEndOfBridge) {
      this.upBridge += ']';
      this.downBridge += ']';
    } else {
      this.upBridge += '| ';
      this.downBridge += '| ';
    }
  }

  static resetBridge() {
    this.upBridge = '[ ';
    this.downBridge = '[ ';
  }

  static createMapInfo({ gameState, originBridgeSize, tryCount }) {
    return {
      map: `${this.upBridge}\n${this.downBridge}`,
      lastResult: gameState.at(-1)[1],
      originBridgeSize,
      currentBridgeSize: gameState.length,
      tryCount,
    };
  }
}

module.exports = BridgeMap;
