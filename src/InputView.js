const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME_RESOURCE } = require("./constants/Constant");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Validate = require("./Validate");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (inputBridgeSize) => {
      Console.print("");
      Validate.isNumber(inputBridgeSize);
      Validate.checkLength(inputBridgeSize);
      let gameTryCount = 0;
      bridgeGame.getCount(gameTryCount);
      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      let userMoveArray = [];
      this.readMoving(bridgeGame, bridge, userMoveArray);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, bridge, userMoveArray) {
    Console.readLine(MESSAGE.CHOOSE_MOVE_SPACE, (userInput) => {
      const moveKey = Validate.checkMovingKey(userInput);
      const userArray = bridgeGame.move(moveKey, userMoveArray);
      const keepGaming = bridgeGame.compareMove(bridge, userArray);
      const getMap = bridgeGame.getMap(userArray);
      const result = OutputView.printMap(getMap, bridge);
      if (keepGaming === GAME_RESOURCE.RIGHT) {
        this.readMoving(bridgeGame, bridge, userMoveArray);
      }
      if (keepGaming === GAME_RESOURCE.ALLRIGHT) {
        let count = bridgeGame.plusCount();
        OutputView.printResult(keepGaming, count, result);
      }
      if (keepGaming === GAME_RESOURCE.WRONG) {
        this.readGameCommand(bridgeGame, bridge, result);
      }
    });
    return;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, bridge, result) {
    Console.readLine(MESSAGE.SELECT_RETRY, (userInput) => {
      const retryOrCloseKey = Validate.checkRetryOrCloseKey(userInput);
      let count = bridgeGame.plusCount();
      const command = bridgeGame.retry(retryOrCloseKey);
      if (command === 1) {
        const userMoveArray = [];
        this.readMoving(bridgeGame, bridge, userMoveArray);
      }
      if (command === 0) {
        OutputView.printResult(command, count, result);
      }
    });
  },
};

module.exports = InputView;
