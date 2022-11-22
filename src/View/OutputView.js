const { Console } = require("@woowacourse/mission-utils");
const { SAYS, FINAL } = require("../Constants/Message");

/**
 * 객체 : 사용자에게 게임 진행 상황과 결과를 출력하는 역할
 * 변경 가능 : 파일경로, 메서드 인자, 메서드 (추가, 변경)
 * 변경 불가 : 메서드 이름
 */

const OutputView = {
  printMessage(context) {
    if (context === "start") {
      Console.print(SAYS.START);
    }
    if (context === "end") {
      Console.print(SAYS.END);
      Console.close();
    }
  },

  printMap(map) {
    Console.print(map);
  },

  printResult(result) {
    Console.print(FINAL.RESULT);
    Console.print(result.upper);
    Console.print(result.lower);
    Console.print(FINAL.TEXT(result.text));
    Console.print(FINAL.TRIAL(result.count));
    Console.print(SAYS.END);
    Console.close();
  },
};

module.exports = OutputView;
