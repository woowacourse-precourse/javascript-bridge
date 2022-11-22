const MissionUtil = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridges) {
    MissionUtil.Console.print("[ "+bridges.upper.join(' | ')+ " ]");
    MissionUtil.Console.print("[ "+bridges.lower.join(' | ')+ " ]");

  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(setBridge, count, result) {
    MissionUtil.Console.print("최종 게임 결과\n");
    OutputView.printMap(setBridge);
    if(result == true) 
      MissionUtil.Console.print("게임 성공 여부: 성공");
    else
      MissionUtil.Console.print("게임 성공 여부: 실패");
    MissionUtil.Console.print("총 시도한 횟수: "+ count);
  },
};

module.exports = OutputView;
