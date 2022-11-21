const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const BridgeGame = require("./BridgeGame");

const Exception = require("./Exception");
const OutputView = require("./OutputView");

let bridgeGame;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      if (Exception.lengthException(length)) {
        bridgeGame = new BridgeGame(length);
        this.readMoving();
      }
      else this.readBridgeSize();
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (moving) => {
      if (Exception.movingException(moving)) {
        const result = bridgeGame.move(moving);
        OutputView.printMap(bridgeGame.movingState);
        this.readMoving();
      }
      else this.readMoving();
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
