const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME_RESOURCE } = require("./constants/Constant");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const Validate = require("./Validate");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

const InputView = {
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

  readMoving(bridgeGame, bridge, userMoveArray) {
    Console.readLine(MESSAGE.CHOOSE_MOVE_SPACE, (userInput) => {
      const moveKey = Validate.checkMovingKey(userInput);
      const userArray = bridgeGame.move(moveKey, userMoveArray);
      const keepGaming = bridgeGame.compareMove(bridge, userArray);
      // compareMove까지는 작동함. getMap에서 부터 빈칸으로 나옴 + 게임은돌아감
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
