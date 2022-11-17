const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const START_STR = "다리 건너기 게임을 시작합니다.\n";

const OutputView = {
  printStart() {
    MissionUtils.Console.print(START_STR);
  },

  mapMaker(progressCnt, isOkWay, bridge) {
    let bridgeMap = {
      up: "[",
      down: "[",
    };
    for (var i = 0; i <= progressCnt - 2; i++) {
      bridgeMap = OutputView.drawMap(bridgeMap, bridge[i], "O");
    }
    if (isOkWay) {
      bridgeMap = OutputView.drawMap(bridgeMap, bridge[progressCnt - 1], "O");
    } else {
      bridgeMap = OutputView.drawMap(
        bridgeMap,
        OutputView.upsideDown(bridge[progressCnt - 1]),
        "X"
      );
    }
    return OutputView.printMap(OutputView.closeMap(bridgeMap));
  },

  upsideDown(way) {
    if (way == "U") {
      return "D";
    }
    return "U";
  },

  closeMap(bridgeMap) {
    bridgeMap.up = bridgeMap.up.substring(0, bridgeMap.up.length - 1) + "]";
    bridgeMap.down =
      bridgeMap.down.substring(0, bridgeMap.down.length - 1) + "]";
    return bridgeMap;
  },

  drawMap(bridgeMap, way, check) {
    if (way == "U") {
      bridgeMap.up = bridgeMap.up + ` ${check} |`;
      bridgeMap.down = bridgeMap.down + "   |";
      return bridgeMap;
    }
    bridgeMap.up = bridgeMap.up + "   |";
    bridgeMap.down = bridgeMap.down + ` ${check} |`;
    return bridgeMap;
  },

  printMap(bridgeMap) {
    MissionUtils.Console.print(bridgeMap.up);
    MissionUtils.Console.print(bridgeMap.down);
    return bridgeMap;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isComplete) {
    if (isComplete) {
      OutputView.printCompleteGame();
      return;
    }
    OutputView.printFailGame();
  },

  printCompleteGame() {
    console.log("end");
    MissionUtils.Console.close();
  },
  printFailGame() {},
};

module.exports = OutputView;
