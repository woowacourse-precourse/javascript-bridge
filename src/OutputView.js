const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
 const OutputView = {
  /**
   * 시작 멘트 출력 함수
   */
   gameStart(){
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.") ;
  },

  /**
   * 다리 출력 함수
   * @param {arr} arr 다리를 프린팅하기 위한 배열 (ex.[["   ","   "," O "],[" O "," O ","   "]])
   */
   printMap(arr) {
    let [one, two] = arr ;
    MissionUtils.Console.print(`[ ${one.join(" | ")} ]\n[ ${two.join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과 출력 함수
   * @param {arr} arr 다리를 프린팅하기 위한 배열 (ex.[["   ","   "," O "],[" O "," O ","   "]])
   * @param {number} tryCount 지금까지의 게임 시도횟수 
   * @param {string} result 게임 결과 (ex. "성공","실패")
   */
   printResult(arr, tryCount, result) {
    MissionUtils.Console.close();
    let [one, two] = arr ;
    let successFail = (result == "Success") ? "성공" : "실패" ;
    MissionUtils.Console.print("최종 게임 결과");
    MissionUtils.Console.print(`[ ${one.join(" | ")} ]\n[ ${two.join(" | ")} ]`);
    MissionUtils.Console.print(`게임 성공 여부: ${successFail}\n총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
