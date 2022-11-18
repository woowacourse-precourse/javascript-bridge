const MissionUtils = require("@woowacourse/mission-utils");
const Bridge = require("./Bridge");
const OutputView = require('./OutputView')
const { MESSAGE } = require("./Messages");

const errorHandling = {
  "[ERROR] 3이상 20이하 사이의 숫자여야 합니다.\n": (bridgeGame, message) => {
    OutputView.printError(message);
    InputView.readBridgeSize(bridgeGame);
  },
  "[ERROR] 입력값은 숫자여야 합니다.\n": (bridgeGame, message) => {
    OutputView.printError(message);
    InputView.readBridgeSize(bridgeGame);
  },
  "[ERROR] 입력값은 U 또는 D 여야합니다.\n": (bridgeGame, message) => {
    OutputView.printError(message);
    InputView.readMoving(bridgeGame);
  },
  '[ERROR] 건널 수 없는 곳 입니다.\n': (bridgeGame) => {
    OutputView.printMap(bridgeGame);
    InputView.readGameCommand(bridgeGame);
  },
  '[ERROR] 입력값은 R 또는 Q 여야합니다.\n': (bridgeGame, message) => {
    OutputView.printError(message);
    InputView.readGameCommand(bridgeGame);
  }
};

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_BRIDGE_SIZE, (size) => {
      try {
        bridgeGame.setBridge(new Bridge(size));
        console.log(bridgeGame.getBridge())
        this.readMoving(bridgeGame);
      } catch (error) {
        errorHandling[error.message](bridgeGame, error.message);
      }
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_MOVE_TYPE, (moveType) => {
      try {
        bridgeGame.move(moveType);
        OutputView.printMap(bridgeGame);

        if (bridgeGame.isEndPosition()) {
          OutputView.printResult(bridgeGame);
          return bridgeGame.exit();
        }
        this.readMoving(bridgeGame);
      } catch (error) {
        errorHandling[error.message](bridgeGame, error.message);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_COMMAND, (command) => {
      try {
        bridgeGame.validateCommand(command);
        restartType[command](bridgeGame);
      } catch (error) {
        errorHandling[error.message](bridgeGame, error.message);
      }
    });
  },
};

const restartType = {
  Q(bridgeGame) {
    OutputView.printResult(bridgeGame);
    bridgeGame.exit();
  },

  R(bridgeGame) {
    bridgeGame.retry();
    InputView.readMoving(bridgeGame);
  }
};

module.exports = InputView;
