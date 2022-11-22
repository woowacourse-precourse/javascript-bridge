const { Console } = require("@woowacourse/mission-utils");
const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printMap(bridgeList) {
    [highBridge, lowBridge] = bridgeList;
    Console.print(highBridge);
    Console.print(`${lowBridge}\n`);
  },
  lineBreak() {
    Console.print("");
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeList, playCount, result) {
    winResult = "성공";
    loseResult = "실패";
    Console.print("최종 게임 결과");
    this.printMap(bridgeList);
    result === true
      ? Console.print(`게임 성공 여부: ${winResult}`)
      : Console.print(`게임 성공 여부: ${loseResult}`);
    Console.print(`총 시도한 횟수: ${playCount}`);
    Console.close();
  },
};

module.exports = OutputView;
