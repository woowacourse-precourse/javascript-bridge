const { Console } = require('@woowacourse/mission-utils');
const { NUMBER, COMMAND, MESSAGE, ERROR, } = require('./BridgeConstant');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.BRIDGE_SIZE, (answer) => {
      try {
        this.exceptionBridgeSize(answer);
        this.setBridgeSize(answer);
      } catch(error) {
        OutputView.printError(error);
        this.readBridgeSize();
      }
    });
  },

  exceptionBridgeSize(answer) {
    if (/[^0-9]/g.test(answer)) {
      throw ERROR.BRIDGE_SIZE_NUMBER;
    }
    if (Number(answer) < NUMBER.BIRDGE_SIZE_MINIMUM || Number(answer) > NUMBER.BIRDGE_SIZE_MAXIMUM) {
      throw ERROR.BRIDGE_SIZE_RANGE;
    }
  },

  setBridgeSize(answer) {
    bridgeGame.setBridge(BridgeMaker.makeBridge(answer, BridgeRandomNumberGenerator.generate));
    this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.MOVING, (answer) => {
      try {
        this.exceptionMoving(answer);
        this.setMoving(answer);
      } catch(error) {
        OutputView.printError(error);
        this.readMoving();
      }
    });
  },

  exceptionMoving(answer) {
    if (answer !== COMMAND.UP && answer !== COMMAND.DOWN) {
      throw ERROR.MOVING;
    }
  },

  setMoving(answer) {
    bridgeGame.move(answer);
    this.getMoving();
  },

  getMoving() {
    OutputView.printMap(bridgeGame.getMoveResult());
    if (bridgeGame.isFail()) this.readGameCommand();
    if (bridgeGame.isSuccess()) OutputView.printResult(bridgeGame.getGameResult());
    else this.readMoving();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.GAME_COMMAND, (answer) => {
      try {
        this.exceptionGameCommand(answer);
        this.setGameCommand(answer);
      } catch(error) {
        OutputView.printError(error);
        this.readGameCommand();
      }
    });
  },

  exceptionGameCommand(answer) {
    if (answer !== COMMAND.RETRY && answer !== COMMAND.QUIT) {
      throw ERROR.GAME_COMMAND;
    }
  },

  setGameCommand(answer) {
    if (answer === COMMAND.RETRY) {
      bridgeGame.retry();
      this.readMoving();
    }
    if (answer === COMMAND.QUIT) {
      OutputView.printResult(bridgeGame.getGameResult());
    }
  }
};

module.exports = InputView;
