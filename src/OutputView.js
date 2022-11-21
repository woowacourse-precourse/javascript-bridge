const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge,steps) {
    let resultUp = "[ ";
    let resultDown = "[ ";
    for(let idx=0; idx<steps.length; idx++){
      if(steps[idx]==bridge[idx] && steps[idx]=='U'){
        resultUp += "O ";
        resultDown += "  ";
      }else if(steps[idx]!=bridge[idx] && steps[idx]=='U'){
        resultUp += "X ";
        resultDown += "  ";
      }else if(steps[idx]==bridge[idx] && steps[idx]=='D'){
        resultDown += "O ";
        resultUp += "  ";
      }else if(steps[idx]!=bridge[idx] && steps[idx]=='D'){
        resultDown += "X ";
        resultUp += "  ";
      }
      resultUp += "| ";
      resultDown += "| ";
    }
    resultUp=resultUp.slice(0,resultUp.length-2);
    resultDown=resultDown.slice(0,resultDown.length-2);
    resultUp+="]";
    resultDown+="]";
    Console.print(resultUp);
    Console.print(resultDown);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {

  },
};
module.exports = OutputView;
