const MissionUtils = require('@woowacourse/mission-utils');
const outputViewModule = require('../src/OutputView');
const exceptionModule = require('../src/Exception');
const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const bridgeGame = new BridgeGame();

//! 1. 예외사항 체크 -> 알파벳 / 소문자 입력시 대문자로 변경하기 / 3~20숫자 => ex) [ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.
//! 2. 함수 10줄 아래로 다 쪼개기
//! 3. 테스트 코드 작성
//! 4. 문서정리하기
//! 5. package.json 제거

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
      async (answer) => {
        answer = await answer.toUpperCase();
        console.log(answer);
        exceptionModule.onlyAlphabet(answer, 'move');
        const result = bridgeGame.move(answer);
        const map = [bridgeGame.bridegeUp, bridgeGame.bridegeDown];
        if (bridgeGame.selectCount === bridgeGame.rightBridge.length) {
          const tryCount = bridgeGame.tryCount;
          outputViewModule.printResult(map, '성공', tryCount);
          bridgeGame.gameOver();
          return;
        }
        outputViewModule.printMap(...map);
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
        answer = answer.toUpperCase();
        exceptionModule.onlyAlphabet(answer, 'retry');
        if (answer === 'R') {
          bridgeGame.retry();
          this.readMoving();
          return;
        }
        if (answer === 'Q') {
          const map = [bridgeGame.bridegeUp, bridgeGame.bridegeDown];
          const tryCount = bridgeGame.tryCount;
          outputViewModule.printResult(map, '실패', tryCount);
          bridgeGame.gameOver();
          return;
        }
      }
    );
  },
};

module.exports = InputView;
