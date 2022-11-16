const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      const bridgeGame = new BridgeGame(BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate));
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (input) => {
      if(!bridgeGame.move(input)) {
        this.readGameCommand();
      } else if (bridgeGame.isArrived()){
        OutputView.printResult(bridgeGame.result());
        return null;
      } 
      OutputView.printMap(bridgeGame.state());
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
