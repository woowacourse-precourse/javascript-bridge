const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const makeBridge = BridgeMaker.makeBridge;
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const generate = BridgeRandomNumberGenerator.generate;
const validator = require('./validators');

const InputView = {
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해 주세요.', (num) => {
      try {
        validator.is3To20(num);
        this.readMoving(setBridgeGame(num));
      } catch (error) {
        Console.print(error);
        InputView.readBridgeSize();
      }
    });
  },

  readMoving(bridgeGame) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (input) => {
      try {
        validator.isUorD(input);
        moveAndCheck(input, bridgeGame);
      } catch (error) {
        Console.print(error);
        InputView.readMoving(bridgeGame);
      }
    });
  },

  readGameCommand(bridgeGame, blocks) {
    Console.readLine('재시도는 R을, 종료는 Q를 입력해주세요.', (input) => {
      try {
        validator.isRorQ(input);
        retryOrQuit(input, bridgeGame, blocks);
      } catch (error) {
        Console.print(error);
        InputView.readGameCommand(bridgeGame, blocks);
      }
    });
  },
};

const setBridgeGame = (num) => {
  const bridge = makeBridge(num, generate);
  const bridgeGame = new BridgeGame(bridge);
  return bridgeGame;
};

const moveAndCheck = (input, bridgeGame) => {
  const [UBlock, DBlock] = bridgeGame.move(input);

  OutputView.printMap(UBlock, DBlock);
  isFailed(bridgeGame, [UBlock, DBlock]);
  moveOrFinish(bridgeGame, [UBlock, DBlock]);
};

const moveOrFinish = (bridgeGame, blocks) => {
  if (!bridgeGame.isFinish()) {
    InputView.readMoving(bridgeGame);
  }
  if (bridgeGame.isFinish()) {
    OutputView.printResult('성공', blocks, bridgeGame.getNumberOfTry());
  }
};

const isFailed = (bridgeGame, blocks) => {
  if (blocks[0].includes('X') || blocks[1].includes('X')) {
    InputView.readGameCommand(bridgeGame, blocks);
  }
};

const retryOrQuit = (input, bridgeGame, blocks) => {
  if (input === 'R') {
    bridgeGame.retry();
    InputView.readMoving(bridgeGame);
  }
  if (input === 'Q') {
    OutputView.printResult('실패', blocks, bridgeGame.getNumberOfTry());
  }
};

module.exports = InputView;
