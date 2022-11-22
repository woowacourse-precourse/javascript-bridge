const {Console} = require("@woowacourse/mission-utils");
const {MESSAGE} = require("../constants/CONSTANT");
const OutputView = require("./OutputView");
const InputValidator = require("./InputValidator");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine(MESSAGE.INPUT.SIZE, (sizeInput) => {
      if (InputValidator.bridgeSize(sizeInput)) {
        bridgeGame.setAnswer(Number(sizeInput),BridgeRandomNumberGenerator.generate);
        return this.readMoving(bridgeGame);
      }
      return this.readBridgeSize(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    if (bridgeGame.getRound() === bridgeGame.getEndRound()) return OutputView.printResult(bridgeGame);
    Console.readLine(MESSAGE.INPUT.MOVE, (moveInput) => {
      if (InputValidator.bridgeMove(moveInput)) {
        if (bridgeGame.move(moveInput)){
          OutputView.printMap(bridgeGame);
          return this.readMoving(bridgeGame);
        };
        OutputView.printMap(bridgeGame);
        return this.readGameCommand(bridgeGame);
      };
      return this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine(MESSAGE.INPUT.COMMAND, (command) => {
      if (InputValidator.bridgeCommand(command)) {
        if (command === 'Q') {
          return OutputView.printResult(bridgeGame);
        }
        bridgeGame.retry();
        this.readMoving(bridgeGame);
      };
      return this.readGameCommand(bridgeGame);
    });
  },
};

module.exports = InputView;
