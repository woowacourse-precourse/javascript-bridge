const Console = require("@woowacourse/mission-utils").Console;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },
  
  printMap(data) {
    const result = [];
    result.push("[ " +
      data.map((position) => 
        position[0] === 0 ? (position[0] === position[1] ? "O" : "X") : " ").join(" | ")
      + " ]");
    result.push("[ " +
      data.map((position) => 
        position[0] === 1 ? (position[0] === position[1] ? "O" : "X") : " ").join(" | ")
      + " ]");
    Console.print(result.join("\n"));
  },

  
  printResult(data, isWin, tryCount) {
    Console.print(`최종 게임 결과`);
    this.printMap(data);
    Console.print(`\n게임 성공 여부: ${isWin ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
