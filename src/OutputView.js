const { Console } = require("@woowacourse/mission-utils");

//게임 결과가 성공인지 실패인지 알려주는 메시지
const RESULT_MESSAGE = Object.freeze({
  SUCCESS: "성공",
  FAIL: "실패",
  showGameResult(gameResult) {
    return (gameResult == 'P' ? RESULT_MESSAGE.SUCCESS : RESULT_MESSAGE.FAIL);
  }
})

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} upList
   * @param {string[]} downList
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upList, downList) {
    Console.print(`[ ${upList.join(" | ")} ]`);
    Console.print(`[ ${downList.join(" | ")} ]`); 
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {string} gameResult
   * @param {string[]} upList
   * @param {string[]} downList
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  
  printResult(gameResult, upList, downList) {
      Console.print('\n최종 게임 결과');
      this.printMap(upList, downList); 
      Console.print(`\n게임 성공 여부: ${RESULT_MESSAGE.showGameResult(gameResult)}`);
  },
  
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {number} gameCount
   */
  printGameCount(gameCount) {
    Console.print("총 시도한 횟수: " + gameCount);
  }
};

module.exports = OutputView;
