const { USER_INPUT, RETRY, END_GAME } = require("./Messages");
const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const { printResult } = require("./OutputView");
const Validation = require("./Validation");
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
      try {
        Validation.validateBridgeSize(size);
        const bridgeList = makeBridge(size, generate);
        InputView.readMoving(bridgeList);
      } 
      catch (error) { this.printError(error); }
      });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeList) {
    Console.readLine(USER_INPUT.ENTER_MOVEMENT, (upOrDown) => {
      try { 
        Validation.validateUserMove(upOrDown);
        const isInputRight = this.bridgeGame.isUserInputRightOrWrong(bridgeList, upOrDown);
        const result = this.bridgeGame.move(bridgeList, upOrDown);
        this.repeatMovingOrNot(bridgeList, result, isInputRight);
      } 
      catch(error) { this.printError(error); }
    })
  },

  repeatMovingOrNot(bridgeList, result, isInputRight) {
    const [upAndDownList, tryNum] = result;
    this.reapeatDrawing(upAndDownList);
    if(isInputRight === true && tryNum < bridgeList.length) {
      this.readMoving(bridgeList);
    } 
    else {
      this.stopMoving(upAndDownList, isInputRight, bridgeList);
    }
  },

  stopMoving(upAndDownList, isInputRight, bridgeList) {
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
      try {
        Validation.validateGameCommand(retryOrQuit);
        this.retryOrQuit(retryOrQuit, upAndDownList, bridgeList);
      } catch(error) { this.printError(error); }
    })
  },

  retryOrQuit(retryOrQuit, upAndDownList, bridgeList) {
    if(retryOrQuit === 'R') {
      this.retryGame(bridgeList);
    } if(retryOrQuit === 'Q') {
      this.quitGame(upAndDownList);
    }
  },

  retryGame(bridgeList) {
    this.bridgeGame.retry();
    this.retryNum += 1;
    InputView.readMoving(bridgeList);
  },

  quitGame(upAndDownList) {
    this.isSuccess = END_GAME.FAILED;
    printResult(upAndDownList, this.retryNum, this.isSuccess);
  },

  printError(error) {
    Console.print(error);
    Console.close();
  },
};

module.exports = InputView;