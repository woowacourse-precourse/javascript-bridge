const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const MESSAGE = require('../constants/Message');
const Validate = require('../utils/Validate');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgegame) {
    Console.readLine(MESSAGE.ANNOUNCE.INPUT_SIZE, (answer) => {
      try {
        Validate.validateBridgeSize(answer);
        this.readBridgeSizeCallback(answer, bridgegame);
      } catch (error) {
        OutputView.printError(error, this.readBridgeSize.bind(InputView), bridgegame);
      }
    });
  },

  readBridgeSizeCallback(answer, bridgegame) {
    bridgegame.setBridge(Number(answer));
    return this.readMoving(bridgegame);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgegame) {
    Console.readLine(MESSAGE.ANNOUNCE.INPUT_MOVE, (answer) => {
      try {
        Validate.validateReadMoving(answer);
        this.readMovingCallback(answer, bridgegame);
      } catch (error) {
        OutputView.printError(error, this.readMoving.bind(InputView), bridgegame);
      }
    });
  },

  readMovingCallback(answer, bridgegame) {
    const moveresult = bridgegame.move(answer);
    OutputView.printMap(bridgegame);
    if (moveresult == 'END') return OutputView.printResult(bridgegame);
    return moveresult ? this.readMoving(bridgegame) : this.readGameCommand(bridgegame);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgegame) {
    Console.readLine(MESSAGE.ANNOUNCE.INPUT_RETRY, (answer) => {
      try {
        Validate.validateReadGameCommand(answer);
        this.readGameCommandCallback(answer, bridgegame);
      } catch (error) {
        OutputView.printError(error, this.readGameCommand.bind(InputView), bridgegame);
      }
    });
  },

  readGameCommandCallback(answer, bridgegame) {
    if (answer == 'Q') return OutputView.printResult(bridgegame);
    bridgegame.retry();
    return this.readMoving(bridgegame);
  },
};

module.exports = InputView;
