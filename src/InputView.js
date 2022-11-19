const { MESSAGE } = require('./Constants.js');
const BridgeSize = require('./Validate/BridgeSize.js');
const CrossingBridge = require('./Validate/CrossingBridge.js');
const RandomNumber = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame.js');
const Retry = require('./Validate/Retry.js');
const OutputView = require('./OutputView.js');
const { playerInput, printMessage, close } = require('./Utils.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    playerInput(MESSAGE.INPUT_SIZE, (size) => {
      const bridgeSize = new BridgeSize(size);
      try {
        bridgeSize.validate();
        const crossableBridge = BridgeMaker.makeBridge(size, RandomNumber.generate);
        const currentPosition = 0;
        const cnt = 1;
        this.readMoving(currentPosition, crossableBridge, cnt);
      } catch (err) {
        printMessage(err);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(currentPosition, crossableBridge, cnt) {
    playerInput(MESSAGE.INPUT_SPACE_TO_MOVE, (move) => {
      const crossingBridge = new CrossingBridge(move);
      const crossableBridgeList = crossableBridge;
      try {
        crossingBridge.validate();
        const bridgeGame = new BridgeGame(move, currentPosition, crossableBridgeList);
        const { upper, lower } = bridgeGame.move();
        if (move !== crossableBridgeList[currentPosition]) {
          this.readGameCommand(currentPosition, crossableBridgeList, upper, lower, cnt);
        }
        if (currentPosition === crossableBridgeList.length - 1 && move === crossableBridgeList[currentPosition]) {
          const isSuccess = '성공';
          OutputView.printResult(upper, lower, isSuccess, cnt);
          return 0;
        }
        currentPosition += 1;
        this.readMoving(currentPosition, crossableBridgeList, cnt);
      } catch (err) {
        printMessage(err);
        this.readMoving(currentPosition, crossableBridgeList, cnt);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(currentPosition, crossableBridgeList, upper, lower, cnt) {
    playerInput(MESSAGE.INPUT_WANT_RETRY, (input) => {
      currentPosition = 0;
      const retry = new Retry(input);
      try {
        retry.validate();
        if (input === 'R') {
          cnt += 1;
          this.readMoving(currentPosition, crossableBridgeList, cnt);
        }
        if (input === 'Q') {
          const isSuccess = '실패';
          OutputView.printResult(upper, lower, isSuccess, cnt);
          close();
        }
      } catch (err) {
        printMessage(err);
        this.readGameCommand(currentPosition, crossableBridgeList, upper, lower, cnt);
      }
    });
  },
};

InputView.readBridgeSize();
