const Console = require("@woowacourse/mission-utils").Console;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },
  
  printMap(data, width) {
    if (data.length === 0)
      throw new Error("[ERROR] 잘못된 값 출력");
    const result = Array.from({length: width}, () => []);
    data.forEach((level) =>
      result.forEach((line, j) =>
        line.push(level[0] === j ? (level[0] === level[1] ? "O" : "X") : " ")
    ));
    Console.print(result.reverse().map((line) => "[ " + line.join(" | ") + " ]").join("\n"));
  },

  
  printResult({data, bridgeWidth, isWin, tryCount}) {
    Console.print(`최종 게임 결과`);
    this.printMap(data, bridgeWidth);
    Console.print(`\n게임 성공 여부: ${isWin ? "성공" : "실패"}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
