const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants.js');
const BridgeSize = require('./BridgeSize.js');
const CrossingBridge = require('./CrossingBridge.js');
const RandomNumber = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.INPUT_SIZE, (size) => {
      const bridgeSize = new BridgeSize(size);
      try {
        bridgeSize.validate();
        const crossableBridge = BridgeMaker.makeBridge(size, RandomNumber.generate);
        this.readMoving(crossableBridge);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(crossableBridge) {
    Console.readLine(MESSAGE.INPUT_SPACE_TO_MOVE, (move) => {
      const crossingBridge = new CrossingBridge(move);
      try {
        crossingBridge.validate();
      } catch (err) {
        Console.print(err);
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

InputView.readBridgeSize();
