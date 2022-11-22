const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR, COMMAND } = require("../constants/constants");
const Validate = require("../utils/Validate");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_LENGTH, (userInput) => {
      try {
        if (!Validate.validateBridgeLength(userInput))
          throw new Error(ERROR.BIRDGE_LENGTH);
        bridgeGame.initGame(userInput);
        this.readMoving(bridgeGame);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(MESSAGE.INPUT_MOVE, (userInput) => {
      try {
        if (!Validate.validateMoveCommand(userInput))
          throw new Error(ERROR.MOVE_COMMAND);
        bridgeGame.move(userInput);
        this.printTurnResult(bridgeGame);
        this.manageResult(bridgeGame);
      } catch (e) {
        Console.print(e);
        this.readMoving(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, trial) {
    Console.readLine(MESSAGE.RESTART_OR_TERMINATE, (userInput) => {
      try {
        if (!Validate.validateGameCommand(userInput))
          throw new Error(ERROR.GAME_COMMAND);
        this.restart(userInput, bridgeGame);
        this.terminate(userInput, bridgeGame, trial);
      } catch (e) {
        Console.print(e);
        this.readGameCommand(bridgeGame);
      }
    });
  },

  printTurnResult(bridgeGame) {
    const bridgeState = bridgeGame.getBridgeState();
    OutputView.printMap(bridgeState);
  },

  printGameResult(bridgeGame, result, trial) {
    const bridgeState = bridgeGame.getBridgeState();
    OutputView.printResult(bridgeState, result, trial);
    Console.close();
  },

  manageResult(bridgeGame) {
    const { isFail, isSuccess, trial } = bridgeGame.getGameState();
    if (isFail) {
      this.readGameCommand(bridgeGame, trial);
    }
    if (!isFail && isSuccess) {
      this.printGameResult(bridgeGame, isSuccess, trial);
    }
    if (!isFail && !isSuccess) {
      this.readMoving(bridgeGame);
    }
  },

  restart(userInput, bridgeGame) {
    if (userInput === COMMAND.RESTART) {
      bridgeGame.retry();
      this.readMoving(bridgeGame);
    }
  },

  terminate(userInput, bridgeGame, trial) {
    if (userInput === COMMAND.QUIT) {
      this.printGameResult(bridgeGame, false, trial);
    }
  },
};

module.exports = InputView;
