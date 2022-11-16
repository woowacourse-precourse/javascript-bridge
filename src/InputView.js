const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const ValidateSize = require("./Validation/ValidateSize");
const ValidateMoving = require("./Validation/ValidateMoving");
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
        : this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.print("You're done!");
    Console.close();
  },
};

module.exports = InputView;
