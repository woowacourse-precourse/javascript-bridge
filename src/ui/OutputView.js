/**
 * 사용자에게 게임 진행 상황과 결과를MissionUtils.Console 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, direction, step) {
    let downSpace = this.printDownPassSpace(bridge, step);
    downSpace += this.printDownCurrentSpace(bridge, direction, step);

    let upSpace = this.printUpPassSpace(bridge, step);
    upSpace += this.printUpCurrentSpace(bridge, direction, step);

    Console.print(upSpace);
    Console.print(downSpace);

    return [upSpace, downSpace];
  },

  printDownPassSpace(bridge, step) {
    let downSpace = "[ ";
    for (let space = 0; space < step; space++) {
      if (bridge[space] === "D") downSpace = downSpace + "O | ";
      else downSpace = downSpace + "  | ";
    }
    return downSpace;
  },

  printUpPassSpace(bridge, step) {
    let upSpace = "[ ";
    for (let space = 0; space < step; space++) {
      if (bridge[space] === "U") upSpace = upSpace + "O | ";
      else upSpace = upSpace + "  | ";
    }
    return upSpace;
  },

  printDownCurrentSpace(bridge, direction, step) {
    let downSpace = "";
    if (bridge[step] === direction) {
      if (direction === "D") downSpace = downSpace + "O ]";
      else downSpace = downSpace + "  ]";
    } else {
      if (direction === "D") downSpace = downSpace + "X ]";
      else downSpace = downSpace + "  ]";
    }
    return downSpace;
  },

  printUpCurrentSpace(bridge, direction, step) {
    let upSpace = "";
    if (bridge[step] === direction) {
      if (direction === "D") upSpace = upSpace + "  ]";
      else upSpace = upSpace + "O ]";
    } else {
      if (direction === "D") upSpace = upSpace + "  ]";
      else upSpace = upSpace + "X ]";
    }
    return upSpace;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(retryCount, isLive, resultMap) {
    let gameResult;
    if (isLive) gameResult = "성공";
    else gameResult = "실패";
    Console.print("\n최종 게임 결과");
    Console.print(resultMap[0]);
    Console.print(resultMap[1]);

    Console.print(`\n게임 성공 여부: ${gameResult}`);
    Console.print(`총 시도한 횟수: ${retryCount}`);
  },
};

module.exports = OutputView;
