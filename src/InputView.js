const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, RESTART_OR_END, RESULT_ENGLISH, NEXT_STEP } = require('./Constant.js');

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
        this.moveNextStep(NEXT_STEP.ONGOING);
      } catch (e) {
        Console.print(e);
        this.moveNextStep(NEXT_STEP.MAKE_BRIDGE);
      }
    });
  },

  readMoving() {
    Console.readLine(GAME_MESSAGE.GET_MOVIING_INFO, (movingInfo) => {
      try {
        checkMovingInfo(movingInfo);

        const tf = bridgeGame.move(movingInfo);
        printMap(bridgeGame);
        this.moveNextStep(bridgeGame.judgeNextStep(tf));
      } catch(e) {
        Console.print(e);
        this.moveNextStep(NEXT_STEP.ONGOING);
      }
    });
  },

  readGameCommand() {
    Console.readLine(GAME_MESSAGE.ASK_RESTART_OR_END, (answer) => {
      try {
        checkRestartOrFail(answer);
      
        if (answer === RESTART_OR_END.END) {
          this.moveNextStep(NEXT_STEP.END, RESULT_ENGLISH.FAIL);
        } else {
          bridgeGame.retry();
          this.moveNextStep(NEXT_STEP.ONGOING);
        }
      } catch (e) {
        Console.print(e);
        this.moveNextStep(NEXT_STEP.RESTART_OR_FAIL);
      }
    });
  },

  moveNextStep(nextStep, successOrFail = RESULT_ENGLISH.SUCCESS) {
    switch (nextStep) {
      case NEXT_STEP.MAKE_BRIDGE:
        this.readBridgeSize();
        break;

      case NEXT_STEP.END:
        printResult(bridgeGame, successOrFail);
        break;

      case NEXT_STEP.ONGOING:
        this.readMoving();
        break;

      case NEXT_STEP.RESTART_OR_FAIL:
        this.readGameCommand();
        break;
    }
  }
};

module.exports = InputView;
