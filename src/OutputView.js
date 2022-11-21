const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
    /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * @param {string[]} bridge 만들어진 다리의 모양
   * @param {number} tempPosition 현재 서 있는 다리의 위치(인덱스)
   * @param {boolean} status 다리 건너기를 성공했는지 실패했는지에 대한 내용 (true/false)
   */
     printMap(bridge, tempPosition, status) {
      const checkedBridge = [[], []];
      for (let i = 0; i <= tempPosition; i++) {
        if(bridge[i] === "U"){((checkedBridge[0][i] = " O "), (checkedBridge[1][i] = "   "))};
        if(bridge[i] === "D"){((checkedBridge[0][i] = "   "), (checkedBridge[1][i] = " O "))};
      }
      if(status === false){
        if(bridge[tempPosition] === "U"){((checkedBridge[0][tempPosition] = "   "), (checkedBridge[1][tempPosition] = " X "))};
        if(bridge[tempPosition] === "D"){((checkedBridge[0][tempPosition] = " X "), (checkedBridge[1][tempPosition] = "   "))};
      }
      MissionUtils.Console.print(`[${checkedBridge[0].join('|')}]\n[${checkedBridge[1].join('|')}]`);
    },
  

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
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
