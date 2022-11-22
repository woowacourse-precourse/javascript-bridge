const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리 길이를 입력해주세요.\n', (inputBridgeSize) => {
      const inputError = InputCheck.checkBridgeSize(inputBridgeSize);
      if (inputError) return this.readBridgeSize();
      const bridge = BridgeMaker.makeBridge(
        inputBridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      let bridgeList = [[], []];
      let attempt = 1;
      this.readMoving(bridge, bridgeList, attempt);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, bridgeList, attempt) {
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (inputBridgeChoice) => {
        InputCheck.checkMoving(inputBridgeChoice);
        const bridgeGame = new BridgeGame();
        const movingResult = bridgeGame.move(
          inputBridgeChoice,
          bridge,
          bridgeList
        );
        OutputView.printMap(movingResult);
        if (movingResult[0].includes('X') || movingResult[1].includes('X')) {
          return this.readGameCommand(bridgeList, bridge, attempt);
        }
        if (movingResult[0].length == bridge.length) {
          const successMessage = '성공';
          return OutputView.printResult(bridgeList, successMessage, attempt);
        }
        return this.readMoving(bridge, movingResult, attempt);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeList, bridge, attempt) {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (choice) => {
        InputCheck.checkRestart(choice);

        const restart = 'R';
        const quit = 'Q';

        if (choice === restart) {
          attempt += 1;
          const bridgeGame = new BridgeGame();
          const resetBridgeList = bridgeGame.retry(bridge);
          return this.readMoving(bridge, resetBridgeList, attempt);
        }
        if (choice === quit) {
          const faileMessage = '실패';
          OutputView.printResult(bridgeList, faileMessage, attempt);
        }
      }
    );
  },
};

const InputCheck = {
  checkBridgeSize(inputBridgeSize) {
    this.checkNumber(inputBridgeSize);
    this.checkRange(inputBridgeSize);
  },

  checkNumber(inputBridgeSize) {
    const notNum = isNaN(inputBridgeSize);
    try {
      if (notNum) {
        throw new Error('[ERROR] 숫자가 아닙니다.');
      }
    } catch (e) {
      Console.print(e.message);
    }
    return !notNum;
  },

  checkRange(inputBridgeSize) {
    try {
      if (inputBridgeSize < 3 || inputBridgeSize > 20) {
        throw new Error('[ERROR] 다리 길이 범위는 3~20 사이입니다.');
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkMoving(inputBridgeChoice) {
    try {
      this.checkCorrectMessage(inputBridgeChoice);
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkCorrectMessage(inputBridgeChoice) {
    try {
      if (inputBridgeChoice !== 'U' && inputBridgeChoice !== 'D') {
        throw new Error('[ERROR] 이동할 칸은 U나 D입니다.');
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkRestart(choice) {
    this.checkChoice(choice);
  },

  checkChoice(choice) {
    try {
      if (choice !== 'R' && choice !== 'Q') {
        throw new Error('[ERROR] 재시작은 R, 종료하려면 Q를 입려하세요');
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },
};

module.exports = InputView;
