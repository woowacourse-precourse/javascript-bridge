const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants.js');
const BridgeSize = require('./BridgeSize.js');
const CrossingBridge = require('./CrossingBridge.js');
const RandomNumber = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame.js');
const { currentPosition } = require('./Utils.js');
const Retry = require('./Retry.js');
const OutputView = require('./OutputView.js');
const { printResult } = require('./OutputView.js');

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
        const { upper, lower } = bridgeGame.move();
        if (move !== crossableBridgeList[currentPosition]) {
          this.readGameCommand(currentPosition, crossableBridgeList, upper, lower);
        }
        if (currentPosition === crossableBridgeList.length - 1 && move === crossableBridgeList[currentPosition]) {
          const isSuccess = '성공';
          OutputView.printResult(upper, lower, isSuccess);
          return 0;
        }
        currentPosition += 1;
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
  readGameCommand(currentPosition, crossableBridgeList, upper, lower) {
    Console.readLine(MESSAGE.INPUT_WANT_RETRY, (input) => {
      currentPosition = 0;
      const retry = new Retry(input);
      try {
        retry.validate();
        if (input === 'R') {
          this.readMoving(currentPosition, crossableBridgeList);
        }
        if (input === 'Q') {
          const isSuccess = '실패';
          OutputView.printResult(upper, lower, isSuccess);
          Console.close();
        }
      } catch (err) {
        Console.print(err);
        this.readGameCommand(currentPosition, crossableBridgeList, upper, lower);
      }
    });
  },
};

InputView.readBridgeSize();
