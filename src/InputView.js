const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const Validation = require('./Validation');
const { MESSAGE, COMMAND } = require('./Message');

const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.LENGTH, (length) => {
      try {
        Validation.validateSize(length);
        bridgeGame.setBridge(length);
        this.readMoving();
      } catch (error) {
        OutputView.printError(error);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.MOVE, (moving) => {
      try {
        Validation.validateMoving(moving);
        bridgeGame.move(moving);
        OutputView.printMap(bridgeGame);
        if (bridgeGame.isWin()) {
          OutputView.printResult(bridgeGame);
        } else if (bridgeGame.isPlaying) {
          this.readMoving();
        } else {
          this.readGameCommand();
        }
      } catch (error) {
        OutputView.printError(error);
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.RETRY, (command) => {
      try {
        Validation.validateCommand(command);
        if (command === COMMAND.RETRY) {
          bridgeGame.retry();
          this.readMoving();
        } else if (command === COMMAND.QUIT) {
          OutputView.printResult(bridgeGame);
        }
      } catch (error) {
        OutputView.printError(error);
        this.readGameCommand();
      }
    });
  },
};

module.exports = InputView;