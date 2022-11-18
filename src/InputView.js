const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/BridgeGame");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  Game: "",
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      if (!this.isValidIBridgeSize(input))
        throw "[ERROR] 3과 20사이의 자연수가 아닙니다.";
      const bridge = BridgeMaker.makeBridge(
        Number(input),
        BridgeRandomNumberGenerator.generate
      );
      this.Game = new BridgeGame(bridge);
      this.readMoving();
    });
  },

  isValidIBridgeSize(input) {
    const validInRange = input >= 3 && input <= 20;
    if (validInRange) return input % 1 === 0;
    return false;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        this.Game.transInputtoPosition(input);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
