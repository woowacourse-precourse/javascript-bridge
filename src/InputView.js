const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const Validate = require('./utils/Validate');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
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
        const moveBridge = new BridgeGame(bridge).move(movePosition);
        const bridgePositon = size - bridge.length;
        OutputView.printMap(moveBridge, bridgePositon);
        this.readMovingControler(moveBridge, size, bridge);
      } catch (error) {
        OutputView.printErrorMessage(error) || InputView.readMoving(bridge, size);
      }
    });
  },

  readMovingControler(moveBridge, size, bridge) {
    if (moveBridge[0] === 'X' || moveBridge[1] === 'X') {
      InputView.readGameCommand();
    }
    if (bridge.length - 1 === 0) console.log('done');
    bridge.shift();
    InputView.readMoving(bridge, size);
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
