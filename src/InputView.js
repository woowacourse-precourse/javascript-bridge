const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const ValidateSize = require("./Validation/ValidateSize");
const ValidateMoving = require("./Validation/ValidateMoving");
const ValidateCommand = require("./Validation/ValidateCommand");
const { GUIDE_MSG } = require("./constants");

const InputView = {
  readBridgeSize() {
    Console.readLine(GUIDE_MSG.START_MSG, (answer) => {
      ValidateSize(answer);
      const bridgeGame = new BridgeGame();
      bridgeGame.start(answer);
      this.readMoving(bridgeGame);
    });
  },

  readMoving(bridgeGame) {
    Console.readLine(GUIDE_MSG.PROGRESS_MSG, (answer) => {
      ValidateMoving(answer);
      bridgeGame.move(answer)
        ? this.readMoving(bridgeGame)
        : this.readGameCommand(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(GUIDE_MSG.RETRY_MSG, (answer) => {
      ValidateCommand(answer);
      bridgeGame.retry(answer) ? this.readMoving(bridgeGame) : Console.close();
    });
  },
};

module.exports = InputView;
