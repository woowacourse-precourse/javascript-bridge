const { Console } = require("@woowacourse/mission-utils");
const { generate } = require('./BridgeRandomNumberGenerator.js');
const { makeBridge } = require('./BridgeMaker.js');
const { printMap, printResult } = require('./OutputView.js');
const { checkBridgeSizeRange, checkBridgeSizeNumber, checkMovingInfo, checkRestartOrFail } = require('./ValidityCheck.js');

const BridgeGame = require('./BridgeGame.js');
const bridgeGame = new BridgeGame();

const GET_BRIDGE_SIZE_SENTENCE = '다리의 길이를 입력해주세요.\n';
const GET_MOVIING_INFO_SENTENCE = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const ASK_RESTART_OR_END_SENTENCE = '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GET_BRIDGE_SIZE_SENTENCE, (bridgeSize) => {
      try {
        checkBridgeSizeNumber(bridgeSize);
        checkBridgeSizeRange(bridgeSize);
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }

      bridgeGame.bridge = makeBridge(bridgeSize, generate);
      bridgeGame.bridgeSize = parseInt(bridgeSize);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(GET_MOVIING_INFO_SENTENCE, (movingInfo) => {
      try {
        checkMovingInfo(movingInfo);

        const tf = bridgeGame.move(movingInfo);
      
        printMap(bridgeGame);
        
        if (tf && (bridgeGame.roundCount - 1) === (bridgeGame.bridgeSize - 1)) printResult(bridgeGame, 'success');
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
    Console.readLine(ASK_RESTART_OR_END_SENTENCE, (answer) => {
      try {
        checkRestartOrFail(answer);
      
        if (answer === 'R') {
          bridgeGame.retry();
          this.readMoving();
        } else if (answer === 'Q') {
          printResult(bridgeGame, 'fail');
        }
      } catch (e) {
        Console.print(e);
        this.readGameCommand();
      }
    })
  },
};

module.exports = InputView;
