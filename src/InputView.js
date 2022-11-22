const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, RESTART_OR_END, RESULT_ENGLISH } = require('./Constant.js');

const { printMap, printResult } = require('./OutputView.js');
const { checkBridgeSize, checkMovingInfo, checkRestartOrFail } = require('./ValidityCheck.js');

const BridgeGame = require('./BridgeGame.js');
const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
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

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(GAME_MESSAGE.GET_MOVIING_INFO, (movingInfo) => {
      try {
        checkMovingInfo(movingInfo);

        const tf = bridgeGame.move(movingInfo);
        printMap(bridgeGame);
        
        if (bridgeGame.judgeEnd(bridgeGame, tf)) printResult(bridgeGame, RESULT_ENGLISH.SUCCESS);
        else if (tf) this.readMoving();
        else this.readGameCommand();
      } catch(e) {
        Console.print(e);
        this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(GAME_MESSAGE.ASK_RESTART_OR_END, (answer) => {
      try {
        checkRestartOrFail(answer);
      
        if (answer === RESTART_OR_END.END) printResult(bridgeGame, RESULT_ENGLISH.FAIL);
        else {
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
