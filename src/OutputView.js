const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  /**
   * 게임 시작 메세지를 출력한다.
  */
  printStart(){
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n")
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {[string[],string[]]} checkedMap 현재까지 이동한 다리의 상태에 대한 리스트 내용
   */
     printMap(checkedMap) {
      MissionUtils.Console.print(
      `[${checkedMap[0].join('|')}]\n[${checkedMap[1].join('|')}]\n`);
    },
  
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {[string[],string[]]} checkedMap 현재까지 이동한 다리의 상태에 대한 리스트 내용
   * @param {boolean} result 게임의 성공 여부를 true/false로 받는다
   * @param {number} tryCount 게임을 총 시도한 횟수를 받는다
   */
  printResult(checkedMap,result,tryCount) {
    MissionUtils.Console.print("최종 게임 결과");
    OutputView.printMap(checkedMap);
    MissionUtils.Console.print(`게임 성공 여부: ${result ? "성공" : "실패" }`);
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);
    MissionUtils.Console.close();
  },

    /**
   * 현재까지 이동한 다리의 상태를 리스트로 반환한다. List[0] - 다리 윗부분 List[1] - 다리 아랫부분
   * <p>
   * @param {string[]} bridge 만들어진 다리의 모양
   * @param {number} tempPosition 현재 서 있는 다리의 위치(인덱스)
   * @param {boolean} status 다리 건너기를 성공했는지 실패했는지에 대한 내용 (true/false)
   * @return {[string[],string[]]} 현재까지 이동한 다리의 상태에 대한 리스트 내용
   */
  returnCheckedMap(bridge, tempPosition, status){
    const checkedMap = [[], []];
    for (let i = 0; i <= tempPosition; i++) {
      if(bridge[i] === "U"){((checkedMap[0][i] = " O "), (checkedMap[1][i] = "   "))};
      if(bridge[i] === "D"){((checkedMap[0][i] = "   "), (checkedMap[1][i] = " O "))};
    }
    if(status === false){
      if(bridge[tempPosition] === "U"){((checkedMap[0][tempPosition] = "   "), (checkedMap[1][tempPosition] = " X "))};
      if(bridge[tempPosition] === "D"){((checkedMap[0][tempPosition] = " X "), (checkedMap[1][tempPosition] = "   "))};
    }
    return checkedMap;
  }
};

module.exports = OutputView;
