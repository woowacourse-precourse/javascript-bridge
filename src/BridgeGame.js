const OutputView = require("./OutputView");

class BridgeGame {
  move(inputBridgeChoice, bridge, bridgeList) {
    const index = bridgeList[0].length;
    if (inputBridgeChoice === "U") {
      if (inputBridgeChoice === bridge[index]) {
        bridgeList[0].push("O");
        bridgeList[1].push(" ");
      } else {
        bridgeList[0].push("X");
        bridgeList[1].push(" ");
      }
    } else {
      if (inputBridgeChoice === bridge[index]) {
        bridgeList[1].push("O");
        bridgeList[0].push(" ");
      } else {
        bridgeList[1].push("X");
        bridgeList[0].push(" ");
      }
    }
    OutputView.printMap(bridgeList);
    return bridgeList;
  }

  retry() {
    let bridgeList = [[], []];
    return bridgeList;
  }
}

module.exports = BridgeGame;
