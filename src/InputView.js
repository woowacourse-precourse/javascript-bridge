const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const makeBridge = BridgeMaker.makeBridge;
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const generate = BridgeRandomNumberGenerator.generate;

const InputView = {
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해 주세요.', (num) => {
      is3To20(num);

      const bridge = makeBridge(num, generate);
      const bridgeGame = new BridgeGame(bridge);

      this.readMoving(bridgeGame);
    });
  },

  readMoving(bridgeGame) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (input) => {
      isUorD(input);

      const [UBlock, DBlock] = bridgeGame.move(input);
      OutputView.printMap(UBlock, DBlock);

      if (UBlock.includes('X') || DBlock.includes('X')) {
        this.readGameCommand(bridgeGame, [UBlock, DBlock]);
      }

      if (!bridgeGame.isFinish()) {
        this.readMoving(bridgeGame);
      }
      if (bridgeGame.isFinish()) {
        OutputView.printResult('성공', [UBlock, DBlock]);
      }
    });
  },

  readGameCommand(bridgeGame, blocks) {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
      (input) => {
        isRorQ(input);
        if (input === 'R') {
          bridgeGame.retry();
          this.readMoving(bridgeGame);
        }
        if (input === 'Q') {
          OutputView.printResult('실패', blocks);
        }
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
