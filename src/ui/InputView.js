const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES, ERROR_MESSAGES } = require("../constants/constant");

const BridgeGame = require("../domain/BridgeGame");
const BridgeMaker = require("../domain/BridgeMaker");
const BridgeRandomNumberGenerator = require("../domain/BridgeRandomNumberGenerator");
const GameInfo = require("../domain/GameInfo");
const OutputView = require("./OutputView");

const ValidateBridgeSize = require("../utils/ValidateBridgeSize");
const ValidateMoving = require("../utils/ValidateMoving");
const ValidateGameCommand = require("../utils/ValidateGameCommand");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  validateMoving: null,

  validateGameCommand: null,

  inputErrorProcess(validClass, inputValue, objectCode) {
    try {
      GameInfo[objectCode] = new validClass(inputValue)[objectCode];
    } catch {
      OutputView.printMessage(ERROR_MESSAGES[objectCode]);
      return false;
    }
    return true;
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GAME_MESSAGES.messageOfInputSize, (bridgeSize) => {
      if (this.inputErrorProcess(ValidateBridgeSize, bridgeSize, "bridgeSize") === false)
        return this.readBridgeSize();
      GameInfo.bridge = BridgeMaker
        .makeBridge(GameInfo.bridgeSize, BridgeRandomNumberGenerator.generate);

      return this.playGame();
    });
  },

  playGame() {
    BridgeGame.initializeGameInfo();

    return this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(GAME_MESSAGES.messageOfInputMoving, (moving) => {
      if (this.inputErrorProcess(ValidateMoving, moving, "moving") === false)
        return this.readMoving();

      return this.moveBridge();
    });
  },

  moveBridge() {
    BridgeGame.move();
    OutputView.printMap();
    if (BridgeGame.isFailure()) return this.readGameCommand();

    return (BridgeGame.getPosition() !== GameInfo.bridgeSize - 1) ?
      this.readMoving() : OutputView.printSuccess();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(GAME_MESSAGES.messageOfInputGameCommand, (gameCommand) => {
      if (this.inputErrorProcess(ValidateGameCommand, gameCommand, "gameCommand") === false)
        return this.readGameCommand();

      return (BridgeGame.retry()) ? this.playGame() : OutputView.printResult();
    });
  },
};

module.exports = InputView;
