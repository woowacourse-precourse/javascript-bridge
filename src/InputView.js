const { USER_INPUT, RETRY, END_GAME } = require("./Messages");
const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const { printResult } = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  bridgeGame: new BridgeGame(),
  retryNum: 1,
  isSuccess: END_GAME.SUCCESSED,

  readBridgeSize() {
    Console.readLine(USER_INPUT.ENTER_LENGTH, (size) => {
      const bridgeList = makeBridge(size, generate);
      InputView.readMoving(bridgeList);
    });
  },
  
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeList) {
    Console.readLine(USER_INPUT.ENTER_MOVEMENT, (upOrDown) => {
      const isInputRight = this.bridgeGame.isUserInputRightOrWrong(bridgeList, upOrDown);
      const result = this.bridgeGame.move(bridgeList, upOrDown);
      this.repeatMovingOrNot(bridgeList, result, isInputRight);
    })
  },

  repeatMovingOrNot(bridgeList, result, isInputRight) {
    const [upAndDownList, tryNum] = result;
    this.reapeatDrawing(upAndDownList);
    if(isInputRight === true && tryNum < bridgeList.length) {
      this.readMoving(bridgeList);
    } 
    else {
      this.stopMoving(upAndDownList, isInputRight);
    }
  },

  stopMoving(upAndDownList, isInputRight) {
    if(isInputRight) {
      printResult(upAndDownList, this.retryNum, this.isSuccess);
    }
    if(!isInputRight) {
      this.readGameCommand(upAndDownList, bridgeList);
    }
  },

  reapeatDrawing(upAndDownList) {
    OutputView.printMap(upAndDownList);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(upAndDownList, bridgeList) {
    Console.readLine(RETRY, (retryOrQuit) => {
      if(retryOrQuit === 'R') {
        this.bridgeGame.retry();
        this.retryNum += 1;
        InputView.readMoving(bridgeList);
      } else if(retryOrQuit === 'Q') {
          this.isSuccess = END_GAME.FAILED;
          printResult(upAndDownList, this.retryNum, this.isSuccess);
      }
    })
  },
};

module.exports = InputView;