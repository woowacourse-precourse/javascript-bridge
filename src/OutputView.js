const MissionUtils = require("@woowacourse/mission-utils");
const Consolee = MissionUtils.Console;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeResult) {
    //출력 예시
    /*
    [ O ]
    [   ]

    [ O |   ]
    [   | O ]
    */
    Consolee.print(`[ ${bridgeResult.upBridge.join(' | ')} ]\n`);
    Consolee.print(`[ ${bridgeResult.downBridge.join(' | ')} ]\n`);

  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(setBridge, cnt, res) {
    //출력 예시
    //게임 성공 여부: 성공
    //총 시도한 횟수: 1
    Consolee.print("최종 게임 결과\n");
    OutputView.printMap(setBridge);
    if(res == true) Consolee.print("게임 성공 여부: 성공\n");
    if(res == false) Consolee.print("게임 성공 여부: 실패\n");
    Consolee.print(`총 시도한 횟수: ${cnt}\n`);
  },
};

module.exports = OutputView;
