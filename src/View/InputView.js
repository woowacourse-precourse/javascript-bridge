const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../bridgeMaker");
const Message = require("../Message");
// const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const CheckError = require("../checkError");
// const Tempo = require("./tempo");
const BridgeGame = require("../bridgeGame");
// const { generate } = require("../BridgeRandomNumberGenerator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(app) {
    MissionUtils.Console.readLine(Message.BRIDGE_LENGTH, (size) => {
      checkBoolean = CheckError.checkBridgeLength(size);
      if (!checkBoolean) return this.readBridgeSize();
      app.makingBridge(size);
      // let bridgeArray = BridgeMaker.makeBridge(size, generate);
      // this.readMoving(bridgeArray);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(app) {
    MissionUtils.Console.readLine(Message.CHOICE_UPDOWN, (userChoice) => {
      checkBoolean = CheckError.checkChoiceUpDown(userChoice);
      if (!checkBoolean) return this.readMoving(app);
      app.inputUserMove(userChoice);
      // const bridgeGame = new BridgeGame(bridgeArray);
      // bridgeGame.move(input, bridgeArray);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
