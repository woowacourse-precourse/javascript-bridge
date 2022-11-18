const MISSIONUTILS = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printMap(i, bridge, check, bridgeMap){  
    if (check == 'O'){
      if (bridge[i] == 'U'){
        bridgeMap[0] += "| O ";
        bridgeMap[1] += "|   ";
      }
      else{
        bridgeMap[0] += "|   ";
        bridgeMap[1] += "| O ";
      }
    }

    if (check == 'X'){
      if (bridge[i] == 'U'){
        bridgeMap[0] += "|   ";
        bridgeMap[1] += "| X ";
      }
      else{
        bridgeMap[0] += "| X ";
        bridgeMap[1] += "|   ";
      }
    }

    MISSIONUTILS.Console.print(bridgeMap[0]+"]");
    MISSIONUTILS.Console.print(bridgeMap[1]+"]");
    return bridgeMap;
  },

  printMapFirst(bridge, check) {
    var bridgeMap = new Array();
    bridgeMap[0] = "[";
    bridgeMap[1] = "[";

    if (check == 'O'){
      if (bridge[0] == 'U'){
        bridgeMap[0] += " O ";
        bridgeMap[1] += "   ";
      }
      else{
        bridgeMap[0] += "   ";
        bridgeMap[1] += " O ";
      }
    }

    if (check == 'X'){
      if (bridge[0] == 'U'){
        bridgeMap[0] += "   ";
        bridgeMap[1] += " X ";
      }
      else{
        bridgeMap[0] += " X ";
        bridgeMap[1] += "   ";
      }
    }

    MISSIONUTILS.Console.print(bridgeMap[0]+"]");
    MISSIONUTILS.Console.print(bridgeMap[1]+"]");
    return bridgeMap;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printResult(bridgeMap, result, tryCount) {
    MISSIONUTILS.Console.print("");
    MISSIONUTILS.Console.print("최종 게임 결과");

    MISSIONUTILS.Console.print(bridgeMap[0]+"]");
    MISSIONUTILS.Console.print(bridgeMap[1]+"]");
    
    MISSIONUTILS.Console.print("");
    MISSIONUTILS.Console.print("게임 성공 여부: "+ result);
    MISSIONUTILS.Console.print("총 시도한 횟수: "+ tryCount);
  },
};

module.exports = OutputView;
