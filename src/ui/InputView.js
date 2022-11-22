const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("../constants/constant");

const BridgeGame = require("../domain/BridgeGame");
const InputErrorProcess = require("../domain/InputErrorProcess");
const OutputView = require("./OutputView");

const ValidateBridgeSize = require("../utils/ValidateBridgeSize");
const ValidateMoving = require("../utils/ValidateMoving");
const ValidateGameCommand = require("../utils/ValidateGameCommand");
const UseGameInfo = require("../domain/UseGameInfo");
const GameInfo = require("../domain/GameInfo");
const BridgeRandomNumberGenerator = require("../domain/BridgeRandomNumberGenerator");
const BridgeMaker = require("../domain/BridgeMaker");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GAME_MESSAGES.messageOfInputSize, (bridgeSize) => {
      try {
        GameInfo.bridgeSize = new ValidateBridgeSize(bridgeSize).bridgeSize;
        GameInfo.bridge = BridgeMaker
          .makeBridge(GameInfo.bridgeSize, BridgeRandomNumberGenerator.generate);
        UseGameInfo.initializeGameInfo();
        return this.readMoving();
      } catch (error) {
        OutputView.printMessage(error);
        return this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(GAME_MESSAGES.messageOfInputMoving, (moving) => {
      try {
        GameInfo.moving = new ValidateMoving(moving).moving;
        return this.moveBridge();
      } catch (error) {
        OutputView.printMessage(error);
        return this.readMoving();
      }
      // const inputErrorProcess = new InputErrorProcess();
      // if (!inputErrorProcess.inputErrorProcess(ValidateMoving, moving, "moving"))
      //   return this.readMoving();

      // return this.moveBridge();
    });
  },

  moveBridge() {
    BridgeGame.move();
    OutputView.printMap();
    if (UseGameInfo.isFailure()) return this.readGameCommand();

    return (UseGameInfo.isLastTurn()) ?
      this.readMoving() : OutputView.printSuccess();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(GAME_MESSAGES.messageOfInputGameCommand, (gameCommand) => {
      try {
        GameInfo.gameCommand = new ValidateGameCommand(gameCommand).gameCommand;
        return (BridgeGame.retry(gameCommand) && UseGameInfo.initializeGameInfo()) ?
          this.readMoving() : OutputView.printResult();
      } catch (error) {
        OutputView.printMessage(error);
        return this.readGameCommand();
      }
      // const inputErrorProcess = new InputErrorProcess();
      // if (!inputErrorProcess
      //   .inputErrorProcess(ValidateGameCommand, gameCommand, "gameCommand"))
      //   return this.readGameCommand();

      // return (BridgeGame.retry(gameCommand) && UseGameInfo.initializeGameInfo()) ?
      //   this.readMoving() : OutputView.printResult();
    });
  },
};

module.exports = InputView;
