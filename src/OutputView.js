const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameData) {
    MissionUtils.Console.print(this.getUpBridgeString(gameData));
    MissionUtils.Console.print(this.getDownBridgeString(gameData));
  },

  getUpBridgeString(gameData) {
    let ret = "[";
    for (let index = 0; index <= gameData.cur; index++) {
      let temp = " ";
      if (gameData.result[index] == 1) {
        temp = "O";
        if (index === gameData.size - 1) {
          gameData.state = 1;
        }
      } else if (gameData.result[index] == 3) {
        temp = "X";
        gameData.state = -1;
      }
      ret += " " + temp + " ";
      if (index != gameData.cur) {
        ret += "|";
      }
    }
    ret += "]";
    return ret;
  },

  getDownBridgeString(gameData) {
    let ret = "[";
    for (let index = 0; index <= gameData.cur; index++) {
      let temp = " ";
      if (gameData.result[index] == 2) {
        temp = "O";
        if (index === gameData.size - 1) {
          gameData.state = 1;
        }
      } else if (gameData.result[index] == 4) {
        temp = "X";
        gameData.state = -1;
      }
      ret += " " + temp + " ";
      if (index != gameData.cur) {
        ret += "|";
      }
    }
    ret += "]";
    return ret;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameData) {
    let result = "실패";
    if (gameData.state === 1) {
      result = "성공";
    }

    MissionUtils.Console.print("\n최종 게임 결과");
    this.printMap(gameData);
    MissionUtils.Console.print(`\n게임 성공 여부: ${result}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${gameData.count}`);
  },
};

module.exports = OutputView;
