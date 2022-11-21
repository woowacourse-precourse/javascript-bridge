const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const Generator = require("./BridgeRandomNumberGenerator");
const Console = MissionUtils.Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const game = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  constructor() {
    this.now = 0;
  },

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (answer) => {
      this.bridge = BridgeMaker.makeBridge(answer, Generator);

      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */

  readMoving() {
    Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
      (answer) => {
        console.log(answer + "선택함");
        game.move(answer, this.bridge, this.now);
        this.now += 1;

        this.readMoving();
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
