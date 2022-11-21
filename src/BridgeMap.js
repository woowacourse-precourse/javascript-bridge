const OutputView = require('./OutputView');

class BridgeMap {
  static createMap(mapInfo, readFuncs) {
    const { gameState, originBridgeSize, tryCount } = mapInfo;

    let upBridge = '[ ';
    let downBridge = '[ ';

    gameState.forEach(([moving, gameResult], index) => {
      if (moving === 'U') {
        upBridge += `${gameResult} `;
        downBridge += '  ';
      }

      if (moving === 'D') {
        downBridge += `${gameResult} `;
        upBridge += '  ';
      }

      if (index === gameState.length - 1) {
        upBridge += ']';
        downBridge += ']';
      } else {
        upBridge += '| ';
        downBridge += '| ';
      }
    });

    const gameInfo = {
      map: `${upBridge}\n${downBridge}`,
      lastResult: gameState.at(-1)[1],
      originBridgeSize,
      currentBridgeSize: gameState.length,
      tryCount,
    };

    OutputView.printMap(gameInfo, readFuncs);
  }
}

module.exports = BridgeMap;
