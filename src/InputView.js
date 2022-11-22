const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, RESTART_OR_END, RESULT_ENGLISH, JUDGE_NEXT_STEP } = require('./Constant.js');

const { printMap, printResult } = require('./OutputView.js');
const { checkBridgeSize, checkMovingInfo, checkRestartOrFail } = require('./ValidityCheck.js');

const BridgeGame = require('./BridgeGame.js');
const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 
 * 입력 / 입력 뒤 실행될 함수 / 다음 단계로 넘어가는 코드를 포함하는 객체이다.
 */
const InputView = {
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.GET_BRIDGE_SIZE, (bridgeSize) => {
      try {
        checkBridgeSize(bridgeSize);

        bridgeGame.generateBridge(bridgeSize);
        this.readMoving();
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  readMoving() {
    Console.readLine(GAME_MESSAGE.GET_MOVIING_INFO, (movingInfo) => {
      try {
        checkMovingInfo(movingInfo);

        const tf = bridgeGame.move(movingInfo);
        printMap(bridgeGame);
        
        const nextStep = bridgeGame.judgeNextStep(tf);
        if (nextStep === JUDGE_NEXT_STEP.END) printResult(bridgeGame, RESULT_ENGLISH.SUCCESS);
        else if (nextStep === JUDGE_NEXT_STEP.ONGOING) this.readMoving();
        else if (nextStep === JUDGE_NEXT_STEP.RESTART_OR_FAIL) this.readGameCommand();
      } catch(e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  readGameCommand() {
    Console.readLine(GAME_MESSAGE.ASK_RESTART_OR_END, (answer) => {
      try {
        checkRestartOrFail(answer);
      
        if (answer === RESTART_OR_END.END) {
          printResult(bridgeGame, RESULT_ENGLISH.FAIL);
        } else {
          bridgeGame.retry();
          this.readMoving();
        }
      } catch (e) {
        Console.print(e);
        this.readGameCommand();
      }
    });
  },
};

module.exports = InputView;
