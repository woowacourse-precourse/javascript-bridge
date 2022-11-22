const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Script = require("./Script");
const OutputView = require("./OutputView");



class BridgeGame {
  bridge;
  movingDirection;
  bridgeArr;

  play() {
    MissionUtils.Console.print(`${Script.STARTSCRIPT}\n`);
    this.input();
  }
  
  input() {
    InputView.readBridgeSize()
      .then((bridgeData) => {
        this.bridge = bridgeData
        let tmpBridge = this.deepCopy(this.bridge)
        this.bridgeArr = [];
        this.move(tmpBridge);
      });
    }
    
  deepCopy(object) {
  if (object === null || typeof object !== "object") {
    return object;
  }
    
  const copy = Array.isArray(object) ? [] : {};
 
  for (let key of Object.keys(object)) {
    copy[key] = this.deepCopy(object[key]);
  }
  return copy;
  }
  
  move(bridge) {
    InputView.readMoving()
      .then((movingDirectionData) => {
        this.movingDirection = movingDirectionData
        this.checkBridge(bridge, this.movingDirection);
      });
  }

  checkBridge(bridge, movingDirection) {
    const bridgeDirection = bridge.shift();
    this.bridgeArr = OutputView.printMap(bridgeDirection, movingDirection, this.bridgeArr);
    if (bridge.length === 0) return OutputView.printResult();
    if (bridgeDirection === movingDirection) return this.move(bridge);

    this.retry(this.bridge);

  }

  
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(bridge) {
    InputView.readGameCommand()
      .then((retryAnswer) => {
        if (retryAnswer === "R") {
          this.bridgeArr = [];
          return this.move(bridge);
        }
        return OutputView.printResult();
      });
  }
}

module.exports = BridgeGame;
