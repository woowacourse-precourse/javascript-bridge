const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const GameController = require("../controller/GameController");
const OutputView = require("./OutputView");

const InputView = {
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      if(!GameController.exceptionHandling(size, 'size')){
        this.readBridgeSize();
        return;
      }
      this.readMoving();
    })
  },

  readMoving() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (moving) => {
      if(Exception.movingException(moving)) {
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

  readGameCommand() {
    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      if(Exception.retryingException(answer)) {
        bridgeGame.retry(answer) ? this.readMoving() : OutputView.printResult(bridgeGame.movingState, false);
      }
      else this.readGameCommand();
    })
  },
};

module.exports = InputView;
