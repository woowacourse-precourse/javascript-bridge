const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeGameSetter = require('./BridgeGameSetter');
const validator = require('./InputValidators');

const InputView = {
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해 주세요.', (num) => {
      try {
        validator.is3To20(num);
        this.readMoving(BridgeGameSetter(num));
      } catch (error) {
        ErrorHandlers.errorHandlerInReadBridgeSize(error);
      }
    });
  },
  readMoving(bridgeGame) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (input) => {
      try {
        validator.isUorD(input);
        moveAndCheck(input, bridgeGame);
      } catch (error) {
        ErrorHandlers.errorHandlerInReadMoving(error, bridgeGame);
      }
    });
  },

  readGameCommand(bridgeGame, blocks) {
    Console.readLine('재시도는 R을, 종료는 Q를 입력해주세요.', (input) => {
      try {
        validator.isRorQ(input);
        retryOrQuit(input, bridgeGame, blocks);
      } catch (error) {
        ErrorHandlers.errorHandlerInReadGameCommand(error, bridgeGame, blocks);
      }
    });
  },
};

const ErrorHandlers = {
  errorHandlerInReadBridgeSize(error) {
    Console.print(error);
    InputView.readBridgeSize();
  },

  errorHandlerInReadMoving(error, bridgeGame) {
    Console.print(error);
    InputView.readMoving(bridgeGame);
  },

  errorHandlerInReadGameCommand(error, bridgeGame, blocks) {
    Console.print(error);
    InputView.readGameCommand(bridgeGame, blocks);
  },
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
