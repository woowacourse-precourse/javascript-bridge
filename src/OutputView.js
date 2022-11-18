const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printMap(selectBridge, isUserDie) {
    const map = this.makeMap(selectBridge, isUserDie);
    MissionUtils.Console.print(map);
  },

  printResult(selectBridge) {
    MissionUtils.Console.print("최종 게임 결과");
    this.printMap(selectBridge, false);
    MissionUtils.Console.close();
  },

  printGetStarted() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },

  makeMap(selectBridge, isUserDie) {
    let topLine = "[";
    let bottomLine = "[";
    selectBridge.forEach((element, index) => {
      let type = "O";
      if (selectBridge.length - 1 === index) {
        if (isUserDie) type = "X";
        const square = this.drawSquare(element, type);
        topLine += square.topSquare;
        bottomLine += square.bottomSquare;
      } else {
        const square = this.drawSquare(element, type);
        topLine += square.topSquare + "|";
        bottomLine += square.bottomSquare + "|";
      }
    });
    topLine += "]";
    bottomLine += "]";

    return topLine + "\n" + bottomLine;
  },

  drawSquare(element, result) {
    let topSquare = "   ";
    let bottomSquare = "   ";

    if (element === "U") {
      topSquare = ` ${result} `;
    }
    if (element === "D") {
      bottomSquare = ` ${result} `;
    }

    return { topSquare, bottomSquare };
  },
};

module.exports = OutputView;
