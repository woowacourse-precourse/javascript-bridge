const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {

    let bridgeSize;
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (userInput) => {
      bridgeSize = Number(userInput);
    });
    if (Number(bridgeSize) != parseInt(bridgeSize)) {
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n";
    } else if (bridgeSize < 3 || bridgeSize > 20) {
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n";
    }
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving;
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (userInput) => {
      moving = userInput;
    });
    if (moving === "U" || moving === "D") {
      return moving
    }
    throw new Error("[ERROR] 이동할 칸은 U 혹은 D만 입력 가능합니다.\n");
    // if (moving != "U" || moving != "D") {
    //   // throw new Error("[ERROR] 이동할 칸은 U 혹은 D만 입력 가능합니다.\n");
    //   // throw "[ERROR] 이동할 칸은 U 혹은 D만 입력 가능합니다.\n";
    // }
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */ // Q
  readGameCommand() {
    let gameCommand;
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (userInput) => {
      gameCommand = userInput;
    });
    if (gameCommand != "R" || gameCommand != "Q") {
      throw new Error("[ERROR] 재시도 여부는 R 혹은 Q만 입력 가능합니다.\n");
    }
    return gameCommand;
  },
};

module.exports = InputView;
