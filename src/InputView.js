const MissionUtils = require("@woowacourse/mission-utils");
const Bridge = require("./Bridge");
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView')
const { MESSAGE } = require("./Messages");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_BRIDGE_SIZE, (size) => {
      if (!bridgeGame.vaildateBridgeSize(size)) {
        this.readBridgeSize(bridgeGame);
        return;
      }

      bridgeGame.setBridge(new Bridge(size));
      console.log(bridgeGame.getBridge());
      this.readMoving(bridgeGame);
    })

  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_MOVE_TYPE, (moveType) => {
      bridgeGame.move(moveType);
      OutputView.printMap(bridgeGame, moveType);
      let maxPosition = bridgeGame.getBridge().length - 1;
      let position = bridgeGame.getPosition();
      if (position < maxPosition)
        this.readMoving(bridgeGame);
      if (position === maxPosition)
        console.log('게임 끝');
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
