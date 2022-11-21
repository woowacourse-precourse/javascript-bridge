const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require('./Constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  // - `OutputView`의 파일 경로는 변경할 수 있다.
  // - `OutputView`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
  // - 값 출력을 위해 필요한 메서드를 추가할 수 있다.
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, currentIndex, isCurrentCorrect) {
    let upperArray = bridge.map(v => v == "U"? "O" : " ")
    let lowerArray = bridge.map(v => v == "D"? "O" : " ")

    if (!isCurrentCorrect) {
      if (upperArray[currentIndex] == "O"){
        lowerArray[currentIndex] = "X";
        upperArray[currentIndex] = " ";
      }
      if (lowerArray[currentIndex] == "O"){
        upperArray[currentIndex] = "X";
        lowerArray[currentIndex] = " ";
      }
    }
    Console.print(`[ ${upperArray.join(" | ")} ]`);
    Console.print(`[ ${lowerArray.join(" | ")} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, totalGames, isPlayerWin) {
    Console.print('최종 게임 결과');
    this.printMap(bridge, bridge.length-1, isPlayerWin);
    let successString = isPlayerWin ? "성공" : "실패";
    Console.print(`게임 성공 여부: ${successString}`)
    Console.print(`총 시도한 횟수: ${ totalGames}`)
  },
  
  printStart() {
    Console.print(MESSAGE.START_GAME);
  }
};

module.exports = OutputView;
