const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeState = require('./BridgeState');
const OutputView = require('./OutputView');
const Validate = require('./utils/Validate');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  userBridge: BridgeState.userBridge,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', (size) => {
      try {
        Validate.validateSizeRange(Number(size));
        const bridge = BridgeMaker.makeBridge(Number(size), BridgeRandomNumberGenerator.generate);
        InputView.readMoving(bridge, size);
      } catch (error) {
        OutputView.printErrorMessage(error) || InputView.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, size) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (movePosition) => {
      try {
        Validate.validateMovePosition(movePosition);
        InputView.movingControler(size, bridge, movePosition);
      } catch (error) {
        OutputView.printErrorMessage(error) || InputView.readMoving(bridge, size);
      }
    });
  },

  movingControler(size, bridge, movePosition) {
    BridgeState.addBridgeFromUser(movePosition);
    const bridgeGame = new BridgeGame(bridge);
    const moveBridge = bridgeGame.move(this.userBridge);
    const drawBridge = bridgeGame.draw(moveBridge);
    OutputView.printMap(drawBridge);
    this.startNextStep(drawBridge, bridge, size);
  },

  startNextStep(drawBridge, bridge, size) {
    if (drawBridge[0].includes('X') || drawBridge[1].includes('X')) {
      return InputView.readGameCommand(drawBridge, bridge, size);
    }

    if (bridge.length === this.userBridge.length) {
      const attemps = BridgeState.numberOfAttempts;
      return OutputView.printResult(drawBridge, '성공', attemps);
    }

    return InputView.readMoving(bridge, size);
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(drawBridge, bridge, size) {
    Console.readLine(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (input) => {
        try {
          Validate.validateRetryOfQuit(input);
          if (input === 'R') {
            this.userBridge = new BridgeGame(bridge).retry(this.userBridge);
            InputView.readMoving(bridge, size);
          }
          if (input === 'Q') {
            const attemps = BridgeState.numberOfAttempts;
            OutputView.printResult(drawBridge, '실패', attemps);
          }
        } catch (error) {
          OutputView.printErrorMessage(error) || InputView.readGameCommand(bridge, size);
        }
      }
    );
  },
};

module.exports = InputView;
