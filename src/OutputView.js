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
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
