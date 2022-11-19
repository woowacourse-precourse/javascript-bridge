const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants.js');
const BridgeSize = require('./BridgeSize.js');
const CrossingBridge = require('./CrossingBridge.js');
const RandomNumber = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame.js');
const { currentPosition } = require('./Utils.js');

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
        const currentPosition = 0;
        this.readMoving(currentPosition, crossableBridge);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(currentPosition, crossableBridge) {
    Console.readLine(MESSAGE.INPUT_SPACE_TO_MOVE, (move) => {
      const crossingBridge = new CrossingBridge(move);
      const crossableBridgeList = crossableBridge;
      try {
        crossingBridge.validate();
        const bridgeGame = new BridgeGame(move, currentPosition, crossableBridgeList);
        currentPosition += 1;
        bridgeGame.move();
        if (move !== crossableBridgeList[currentPosition]) {
          this.readGameCommand();
        }
        this.readMoving(currentPosition, crossableBridgeList);
      } catch (err) {
        Console.print(err);
        this.readMoving(currentPosition, crossableBridgeList);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.INPUT_WANT_RETRY, (input) => {
      console.log(input);
    });
  },
};

InputView.readBridgeSize();
