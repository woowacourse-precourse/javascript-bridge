const {Console} = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  up: [],
  down: [],

  start () {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },
  
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    const result = (
      bridgeGame.user[bridgeGame.moveCount - 1] === bridgeGame.bridge[bridgeGame.moveCount - 1] ? "O" : "X"
    )
    if(bridgeGame.user[bridgeGame.moveCount - 1] === "U") {
      this.up.push(result);
      this.down.push(" ");
    } else if (bridgeGame.user[bridgeGame.moveCount - 1] === "D") {
      this.up.push(" ");
      this.down.push(result);
    }
    
    Console.print(`[ ${this.up.join(" | ")} ]`)
    Console.print(`[ ${this.down.join(" | ")} ]`)
  },

  clearThread() {
    this.up = [];
    this.down = [];
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    const result = bridgeGame.status === "END" ? "성공" : "실패" 
    Console.print(`\n게임 성공 여부: ${result}`)
    Console.print(`총 시도한 횟수: ${bridgeGame.tryCount}`)
  },
};

module.exports = OutputView;
