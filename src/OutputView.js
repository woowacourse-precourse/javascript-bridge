const MissionUtils = require("@woowacourse/mission-utils");
const Script = require("./Script");

const UPANDDOWN = {
  D: 1,
  U: 0
}
const BOOLEAN = {
  true: "성공",
  false: "실패"
}

const SAME = 'O';
const DIFFERENT = 'X';
const ROW = 2;

const OutputView = {
  
  printMap(bridgeDirection, movingDirection, bigBridgeArr) {
    bigBridgeArr = this.createPrintBridge(bridgeDirection, movingDirection, bigBridgeArr);
    const [upString, downString] = this.printScript(bigBridgeArr);
    MissionUtils.Console.print(`${upString.join('')}`);
    MissionUtils.Console.print(`${downString.join('')}\n`);
    return bigBridgeArr;
  },
  
  createPrintBridge(bridgeDirection, movingDirection, bigBridgeArr) {
    const bridgeArr = Array.from(Array(ROW), () => Array());
    if (bridgeDirection === movingDirection) {
      bridgeArr[UPANDDOWN[bridgeDirection]].push(SAME);
      bigBridgeArr.push(bridgeArr);
      return bigBridgeArr;
    }
    bridgeArr[UPANDDOWN[movingDirection]].push(DIFFERENT);
    bigBridgeArr.push(bridgeArr);
    return bigBridgeArr;
  },

  printScript(bigBridgeArr) {
    let [upString, downString] = [['[ '], ['[ ']];
    bigBridgeArr.map((bridge) => {
      let [up, down] = [bridge[0].length === 1 ? bridge[0] : " ", bridge[1].length === 1 ? bridge[1] : " "];
      upString.push(...up, ' | ');
      downString.push(...down, ' | ');
    })
    upString.splice(-1, 1, ' ]');
    downString.splice(-1, 1, ' ]');
    return [upString, downString];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeArr, bool, cnt) {
    const [upString, downString] = this.printScript(bridgeArr);
    MissionUtils.Console.print(`${Script.RESULT}`);
    MissionUtils.Console.print(`${upString.join('')}`);
    MissionUtils.Console.print(`${downString.join('')}\n`);
    MissionUtils.Console.print(`${Script.BOOL}${BOOLEAN[bool]}`);
    MissionUtils.Console.print(`${Script.CNT}${cnt}`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
