const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(board) {
    const height = board.length;
    const width = board[0].length;
    let currentHeight = 0;
    let message = "";
    while (currentHeight < height) {
      message += "[";
      board[currentHeight].forEach(function (marking, index) {
        message += ` ${marking} `;
        if (index < width - 1) message += "|";
      });
      message += "]\n";
      currentHeight++;
    }
    Console.print(message);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(board, count, command) {
    Console.print("최종 게임 결과");
    this.printMap(board);
    const fail = this.isFail(command);
    Console.print(`게임 성공 여부: ${fail ? "실패" : "성공"}`);
    Console.print(`총 시도한 횟수: ${count}`);
  },

  isFail(command) {
    if (command === "Q") return true;
    return false;
  },
};

module.exports = OutputView;
