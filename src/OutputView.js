const { Console } = require("@woowacourse/mission-utils");
const { UP, DOWN, EMPTY } = require("./Utils");

const MESSAGE_START = "다리 건너기 게임을 시작합니다.";

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  currentMap: {
    U: "",
    D: "",
  },

  /**
   * 현재 다리의 위, 아래 칸에 성공인지 실패인지 마킹한다.
   * @param {string} moving
   * @param {string} marking
   */
  markMap(moving, marking) {
    if (this.currentMap[moving] === "") this.currentMap[moving] = `[ ${marking} ]`;
    else {
      const closer = this.currentMap[moving].slice(-2);
      this.currentMap[moving] =
        this.currentMap[moving].slice(0, -2) + ` | ${marking}` + closer;
    }
  },

  /**
   * 현재까지 이동한 다리의 상태를 저장한다.
   * @param {string} moving
   * @param {string} marking
   */
  setCurrentMap(moving, marking) {
    this.markMap(moving, marking);
    switch (moving) {
      case UP:
        this.markMap(DOWN, EMPTY);
        break;
      case DOWN:
        this.markMap(UP, EMPTY);
        break;
    }
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string} moving
   * @param {string} marking
   */
  printMap(moving, marking) {
    this.setCurrentMap(moving, marking);
    Console.print(`${this.currentMap[UP]}\n${this.currentMap[DOWN]}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  /**
   * 게임 시작 안내 문구를 출력한다.
   */
  printStart() {
    Console.print(MESSAGE_START);
  },
};

module.exports = { OutputView, MESSAGE_START };
