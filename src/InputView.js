const MissionUtils = require('@woowacourse/mission-utils');
const outputFunction = require('../src/OutputView');
const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const bridgeGame = new BridgeGame();
const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      const bridge = BridgeMaker.makeBridge(
        answer,
        BridgeRandomNumberGenerator.generate
      );
      bridgeGame.bridgeMake(bridge);
      this.readMoving();
    });
  },

  readMoving() {
    MissionUtils.Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      (answer) => {
        const result = bridgeGame.move(answer);
        const map = [bridgeGame.bridegeUp, bridgeGame.bridegeDown];
        if (bridgeGame.selectCount === bridgeGame.rightBridge.length) {
          const tryCount = bridgeGame.tryCount;
          outputFunction.printResult(map, '성공', tryCount);
          bridgeGame.gameOver();
          return;
        }
        outputFunction.printMap(...map);
        if (!result) {
          this.readGameCommand();
          return;
        }
        this.readMoving();
      }
    );
  },

  readGameCommand() {
    MissionUtils.Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
      (answer) => {
        if (answer === 'R') {
          bridgeGame.retry();
          this.readMoving();
        }
        if (answer === 'Q') {
          const map = [bridgeGame.bridegeUp, bridgeGame.bridegeDown];
          const tryCount = bridgeGame.tryCount;
          outputFunction.printResult(map, '실패', tryCount);
          bridgeGame.gameOver();
        }
      }
    );
  },
};

module.exports = InputView;
