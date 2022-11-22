/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const MissionUtils = require("@woowacourse/mission-utils");
 
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() { //현재 상태 인자로 받아서 string 연결 형태로 다리 추가 

  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    MissionUtils.Console.print("result");

  },

  printStart(){
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  
  },

};

module.exports = OutputView;
