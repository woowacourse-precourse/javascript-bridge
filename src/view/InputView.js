const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const BridgeMaker = require("../BridgeMaker");
const Errors = require("../Error");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
let GameStore = require("../GameStore");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (size) => {
      Errors.bridgeSizeError(size);
      GameStore = BridgeMaker.makeBridge(
        size,
        BridgeRandomNumberGenerator.generate
      );
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        Errors.movingError(input);
        if (GameStore.move(input)) {
          OutputView.printMap();
        } else {
          OutputView.printResult();
          this.readGameCommand();
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
