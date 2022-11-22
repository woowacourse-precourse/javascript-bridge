const BridgeGame = require('../src/BridgeGame');
const bridgeGame = new BridgeGame();
const MissionUtils = require('@woowacourse/mission-utils');
const outputViewModule = require('../src/OutputView');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const exceptionModule = require('../src/Exception');

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      exceptionModule.bridgeSize(answer);
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
        exceptionModule.onlyAlphabet(answer, 'move');
        const result = bridgeGame.move(answer);
        const map = [bridgeGame.bridegeUp, bridgeGame.bridegeDown];
        if (this.checkSuccessCount(map)) {
          return;
        }
        outputViewModule.printMap(...map);
        !result && this.readGameCommand();
        this.readMoving();
      }
    );
  },
  checkSuccessCount(map) {
    if (bridgeGame.selectCount === bridgeGame.rightBridge.length) {
      const tryCount = bridgeGame.tryCount;
      outputViewModule.printResult(map, '성공', tryCount);
      bridgeGame.gameOver();
      return true;
    }
  },

  readGameCommand() {
    MissionUtils.Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
      (answer) => {
        answer = answer.toUpperCase();
        exceptionModule.onlyAlphabet(answer, 'retry');
        if (answer === 'R') {
          return this.RCommand(answer);
        }
        if (answer === 'Q') {
          return this.QCommand(answer);
        }
      }
    );
  },
  RCommand() {
    bridgeGame.retry();
    this.readMoving();
    return;
  },
  QCommand() {
    const map = [bridgeGame.bridegeUp, bridgeGame.bridegeDown];
    const tryCount = bridgeGame.tryCount;
    outputViewModule.printResult(map, '실패', tryCount);
    bridgeGame.gameOver();
    return;
  },
};

module.exports = InputView;
