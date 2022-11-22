const { GAME_MESSAGES } = require("../constants/constant.js");
const BridgeGame = require("../domain/BridgeGame.js");
const BridgeMaker = require("../domain/BridgeMaker.js");
const BridgeRandomNumberGenerator = require("../domain/BridgeRandomNumberGenerator.js");
const { Console } = require("@woowacourse/mission-utils");
const { GameInfo } = require("../domain/GameInfo.js");
const OutputView = require("./OutputView");
const ValidateBridgeSize = require("../utils/ValidateBridgeSize.js");
const ValidateMoving = require("../utils/ValidateMoving.js");
const ValidateGameCommand = require("../utils/ValidateGameCommand.js");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GAME_MESSAGES.messageOfInputSize, (bridgeSize => {
      try {
        GameInfo.size = new ValidateBridgeSize(bridgeSize).getSize();
        GameInfo.bridge = BridgeMaker
          .makeBridge(GameInfo.size, BridgeRandomNumberGenerator.generate);
        return this.readMoving();
      } catch (error) {
        OutputView.printError(error);
        return this.readBridgeSize();
      };
    }));
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(GAME_MESSAGES.messageOfInputMoving, (moving => {
      try {
        const nextMove = new ValidateMoving(moving).getMove();
        const bridgeGame = new BridgeGame(nextMove);
        if (bridgeGame.move(nextMove) === false) return this.readGameCommand();
        if (GameInfo.size === GameInfo.position) return OutputView.printResult();
        return this.readMoving();
      } catch (error) {
        OutputView.printError(error)
        return this.readMoving();
      };
    }));
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(GAME_MESSAGES.messageOfInputGameCommand, (gameCommand => {
      try {
        const isRetry = new ValidateGameCommand(gameCommand).getRetry();
        const bridgeGame = new BridgeGame();
        bridgeGame.retry(isRetry);
        return this.readMoving();
      } catch (error) {
        OutputView.printError(error);
        return this.readGameCommand();
      };
    }));
  },
};

module.exports = InputView;
