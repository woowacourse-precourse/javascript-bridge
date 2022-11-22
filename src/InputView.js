const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const TypeConverter = require('./TypeConverter');
const Validator = require('./Validator');
const { MSG, NEXT_STEP, ERROR_MSG, GAME_CMD } = require('./libs/constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 사용자로부터 입력받기를 시작한다.
   */
  init() {
    Console.print(MSG.startGame);
    this.readLine(MSG.inputBridgeSize, this.readBridgeSize());
  },

  readLine(msg, cb) {
    return Console.readLine(msg, (answer) => {
      try {
        cb(answer);
      } catch (e) {
        Console.print(e.message);
        this.readLine(msg, cb);
      }
    });
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return (answer) => {
      const bridgeSize = TypeConverter.toNumber(answer);
      const bridgeGame = new BridgeGame(bridgeSize);

      this.readLine(MSG.inputMoveDirection, this.readMoving(bridgeGame));
    };
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    return (answer) => {
      const moveDirection = TypeConverter.toString(answer);
      bridgeGame.move(moveDirection);
      OutputView.printMap(bridgeGame.getMovedBridge());

      const nextStep = bridgeGame.nextStep();
      this.executeNextStep(bridgeGame, nextStep);
    };
  },

  executeNextStep(bridgeGame, nextStep) {
    const { correctMove, wrongMove, endGame } = NEXT_STEP;

    switch (nextStep) {
      case correctMove:
        return this.readLine(MSG.inputMoveDirection, this.readMoving(bridgeGame));
      case wrongMove:
        return this.readLine(MSG.inputRestartOrQuitGame, this.readGameCommand(bridgeGame));
      case endGame:
        return OutputView.printResult(bridgeGame);
    }
    return;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    return (answer) => {
      const gameCmd = TypeConverter.toString(answer);
      const isValidCmd = Validator.validGameCommand(gameCmd);
      const isQuitGame = gameCmd === GAME_CMD.quit;

      if (!isValidCmd) {
        throw new Error(ERROR_MSG.invalidGameCmd);
      }

      if (isQuitGame) {
        bridgeGame.quit();
        return OutputView.printResult(bridgeGame);
      }

      bridgeGame.retry();
      this.readLine(MSG.inputMoveDirection, this.readMoving(bridgeGame));
    };
  },
};

module.exports = InputView;
