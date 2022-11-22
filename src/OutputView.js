const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
 const OutputView = {

   gameStart(){
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
   printMap(bridgeArray) {
    let [first, second] = bridgeArray;
    MissionUtils.Console.print(`[ ${first.join(" | ")} ]\n[ ${second.join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
   printResult(bridgeArray, trialCount, result) {
    MissionUtils.Console.close();
    let [first, second] = bridgeArray;
    let successFail = (result == "Success") ? "성공" : "실패";
    MissionUtils.Console.print("최종 게임 결과");
    MissionUtils.Console.print(`[ ${first.join(" | ")} ]\n[ ${second.join(" | ")} ]`);
    MissionUtils.Console.print(`게임 성공 여부: ${successFail}\n총 시도한 횟수: ${trialCount}`);
  },
};

module.exports = OutputView;