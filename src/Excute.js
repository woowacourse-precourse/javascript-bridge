const OutputView = require("./OutputView");
const InputView = require("./InputView");

const Excute = {
  input() {
    InputView.readBridgeSize()
      .then((bridgeData) => {
        let cnt = 1;
        bridge = bridgeData;
        tmpBridge = this.deepCopy(bridge);
        const bridgeArr = [];
        this.move(bridge, tmpBridge, bridgeArr, cnt);
      });
  },


  deepCopy(object) {
  if (object === null || typeof object !== "object") {
    return object;
  }
    
  const copy = Array.isArray(object) ? [] : {};
 
  for (let key of Object.keys(object)) {
    copy[key] = this.deepCopy(object[key]);
  }
  return copy;
  },

  move(bridge, tmpBridge, bridgeArr, cnt) {
    InputView.readMoving()
    .then((movingDirectionData) => {
        console.log(cnt);
        this.checkBridge(bridge, tmpBridge, movingDirectionData, bridgeArr, cnt);
      });
  },

  checkBridge(bridge, tmpBridge, movingDirection, bridgeArr, cnt) {
    console.log(tmpBridge, '진행 다리 길이');
    console.log(bridge, "본 다리");
    const bridgeDirection = tmpBridge.shift();
    bridgeArr = OutputView.printMap(bridgeDirection, movingDirection, bridgeArr);
    let bool = bridgeDirection === movingDirection;
    if (tmpBridge.length === 0 && bool) return OutputView.printResult(bridgeArr, bool, cnt);
    if (bridgeDirection === movingDirection) return this.move(bridge, tmpBridge, bridgeArr, cnt);
    return this.retry(bridge, bridgeArr, cnt);
  },

  retry(bridge, bridgeArr, cnt) {
    InputView.readGameCommand()
      .then((retryAnswer) => {
        if (retryAnswer === "R") {
          const bridgeArr = [];
          tmpBridge = this.deepCopy(bridge);
          cnt++;
          return this.move(bridge, tmpBridge, bridgeArr,cnt);
        }
        return OutputView.printResult(bridgeArr, false, cnt);
      });
  },

}

module.exports = Excute;

