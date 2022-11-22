const { printMap } = require('./OutputView');
class BridgeGame {
  bridge;
  crossingOrder;
  attemptCount;

  constructor(bridge) {
    this.bridge = bridge;
    this.crossingOrder = [];
    this.attemptCount = 1;
  }
  move(direction) {
    this.crossingOrder.push([direction, direction === "U" ? 0 : 1]);
  }

  getBridgeCrossingResult() {
    let bridgeCrossingResult = [[], []];
    this.crossingOrder.forEach(([direction, directionNumber], idx) => {
      const isCross = direction === this.bridge[idx];

      bridgeCrossingResult[directionNumber].push(isCross ? "O" : "X");
      bridgeCrossingResult[Math.abs(directionNumber - 1)].push(" ");
    });
    return bridgeCrossingResult;
  }
}

// let bg = new BridgeGame(['U', 'D', 'D']);
// bg.move('U');
// bg.move('D');
// console.log(bg.getBridgeCrossingResult());

// printMap(bg.getBridgeCrossingResult());