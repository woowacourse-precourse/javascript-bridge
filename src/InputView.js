const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const {
  GAME_MESSAGE,
  BRIDGE_RANGE,
  ERROR_BRIDGE_MESSAGE,
  SHORT_CUT,
  ERROR_PLAYING_MESSAGE,
  ERROR_RETRY_MESSAGE,
  NUMBER,
} = require('./constants');
const { printMap, printResult } = require('./OutputView');
const { getBridgeString } = require('./Utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.inputLength, (userInput) => {
      try {
        const bridgeSize = Number(userInput);
        this.bridgeValidation(bridgeSize);
        const bridge = makeBridge(bridgeSize, generate);
        this.readMoving(bridge, NUMBER.zero, NUMBER.one);
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize();
      }
    });
  },

  checkBridgeInteger(bridgeSize) {
    if (!Number.isInteger(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.integer);
    }
  },
  checkBridgeNumber(bridgeSize) {
    if (Number.isNaN(bridgeSize)) {
      throw new Error(ERROR_BRIDGE_MESSAGE.number);
    }
  },
  checkBridgeRange(bridgeSize) {
    if (bridgeSize < BRIDGE_RANGE.start || bridgeSize > BRIDGE_RANGE.end) {
      throw new Error(ERROR_BRIDGE_MESSAGE.range);
    }
  },

  bridgeValidation(bridgeSize) {
    this.checkBridgeNumber(bridgeSize);
    this.checkBridgeInteger(bridgeSize);
    this.checkBridgeRange(bridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, steps, numberAttempts) {
    Console.readLine(GAME_MESSAGE.move, (userInput) => {
      try {
        this.checkMoveLowercase(userInput);
        this.checkMoveWrong(userInput);
        const bridgeGame = new BridgeGame(bridge, steps, numberAttempts);
        bridgeGame.move(userInput);
        const curSteps = bridgeGame.getSteps();
        const { upBridge, downBridge } = bridgeGame.getStepResult();
        const upBridgeString = getBridgeString(upBridge);
        const downBridgeString = getBridgeString(downBridge);
        printMap(upBridgeString, downBridgeString);
        if (curSteps === bridge.length) {
          printResult(upBridgeString, downBridgeString, true, numberAttempts);
          Console.close();
          return;
        }
        if (steps < curSteps) {
          this.readMoving(bridge, curSteps, numberAttempts);
        }
        if (steps === curSteps) {
          this.readGameCommand(
            bridge,
            curSteps,
            numberAttempts,
            upBridgeString,
            downBridgeString
          );
        }
      } catch (error) {
        Console.print(error.message);
        this.readMoving(bridge, steps, numberAttempts);
      }
    });
  },

  checkMoveLowercase(userInput) {
    if (
      userInput === SHORT_CUT.up.toLowerCase() ||
      userInput === SHORT_CUT.down.toLowerCase()
    ) {
      throw new Error(ERROR_PLAYING_MESSAGE.lowercase);
    }
  },
  checkMoveWrong(userInput) {
    if (userInput !== SHORT_CUT.up && userInput !== SHORT_CUT.down) {
      throw new Error(ERROR_PLAYING_MESSAGE.wrong);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(
    bridge,
    steps,
    numberAttempts,
    upBridgeString,
    downBridgeString
  ) {
    Console.print(GAME_MESSAGE.retry);
    Console.readLine('', (userInput) => {
      try {
        this.checkRetryLowercase(userInput);
        this.checkRetryWrong(userInput);
        if (userInput === 'R') {
          this.readMoving(bridge, steps, numberAttempts + 1);
        }
        if (userInput === 'Q') {
          printResult(upBridgeString, downBridgeString, false, numberAttempts);
          Console.close();
        }
      } catch (error) {
        Console.print(error.message);
        this.readGameCommand(
          bridge,
          steps,
          numberAttempts,
          upBridgeString,
          downBridgeString
        );
      }
    });
  },

  checkRetryLowercase(userInput) {
    if (
      userInput === SHORT_CUT.retry.toLowerCase() ||
      userInput === SHORT_CUT.quit.toLowerCase()
    ) {
      throw new Error(ERROR_RETRY_MESSAGE.lowercase);
    }
  },
  checkRetryWrong(userInput) {
    if (userInput !== SHORT_CUT.retry && userInput !== SHORT_CUT.quit) {
      throw new Error(ERROR_RETRY_MESSAGE.wrong);
    }
  },
};

module.exports = InputView;
