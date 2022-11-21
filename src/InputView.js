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
        this.determineNext(result);
      }
      else this.readMoving();
    })
  },

  determineNext(result) {
    if(result) {
      if(bridgeGame.bridge.length === bridgeGame.movingState.currentLocation) {
        OutputView.printResult(bridgeGame.movingState, true);
      } 
      else this.readMoving();
      return;
    }
    this.readGameCommand();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      if (Exception.retryingException(answer)) {
        bridgeGame.retry(answer) ? this.readMoving() : OutputView.printResult(bridgeGame.movingState, false);
      }
      else this.readGameCommand();
    })
  },
};

module.exports = InputView;
