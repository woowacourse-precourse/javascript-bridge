const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const makeBridge = BridgeMaker.makeBridge;
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const generate = BridgeRandomNumberGenerator.generate;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해 주세요.', (num) => {
      is3To20(num);
      const bridge = makeBridge(num, generate);
      this.readMoving(bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    const bridgeGame = new BridgeGame(bridge);
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (uOrD) => {
      isUorD(uOrD);
      bridgeGame.move(uOrD);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
      (rOrQ) => {
        isRorQ(rOrQ);
      }
    );
  },
};

const is3To20 = (input) => {
  const number = Number(input);
  if (isNaN(number) === false && number >= 3 && number <= 20) {
    return true;
  }
  throw new Error('[ERROR] 다리 길이는 3~20의 숫자 입니다.');
};

const isUorD = (input) => {
  if (input === 'U' || input === 'D') {
    return true;
  }
  throw new Error('[ERROR] 이동할 칸은 위는 "U", 아래는 "D" 입니다.');
};

const isRorQ = (input) => {
  if (input === 'R' || input === 'Q') {
    return true;
  }
  throw new Error('[ERROR] 재시도는 "R", 종료는 "Q"입니다.');
};

module.exports = InputView;
