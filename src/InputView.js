const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const Controller = require("./Controller");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const {
  GO,
  COMMAND,
  SIGN,
  IS_SUCCESS,
  MESSAGE,
  ERROR_MESSAGE,
} = require("./constant");
// const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.inputLength, (size) => {
      this.getBridgeSize(Number(size));
      Controller.getSize(Number(size));
      this.savedBridge = BridgeMaker.makeBridge(Number(size));
      this.readMoving(Number(size));
    });
  },
  getBridgeSize(size) {
    try {
      if (Number(size) < 3 || Number(size) > 20) {
        throw new Error(MissionUtils.Console.print(ERROR_MESSAGE.inputRange));
      }
    } catch (err) {
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(MESSAGE.inputMove, (block) => {
      this.getMoving(block); // 에러
      Controller.addRound();
      new BridgeGame().move(block, this.savedBridge);
      OutputView.printMap(Controller.arrayState);
      this.judgeContinue()
    });
  },
  getMoving(block) { // is에러 이런식으로 밸리데이션에 분리 시도하기
    try {
      if (block !== GO.up && block !== GO.down) {
        Controller.isBlockError();
        throw new Error(MissionUtils.Console.print(ERROR_MESSAGE.choose_UorD));
      }
    } catch (err) {
      this.readMoving(); // 문제3. 틀리고 다시 시작하면 메세지가 또출력됨 아isGameEnd때문인데? 지우면 readMoving재실행이 안됨 문제4 처음부터 에러나면 빈어레이가 그대로 출력됨
    }
  },
  judgeContinue(){
    if(!Controller.checkContinue()){
      this.isGameEnd()
    }
    if(Controller.checkContinue()){
      this.readMoving()
    }
  },
  isGameEnd() {// 문제1. 에러가 나는 다른 문자가 들어가도 배열에 포함되니 끝나버림.
    const size = Number(Controller.size);
    MissionUtils.Console.print(OutputView.nowArray)
    if (OutputView.nowArray[0].includes(SIGN.fail) || OutputView.nowArray[1].includes(SIGN.fail)) {
      return this.readGameCommand();
    }
    if (Controller.playerArr.length === size) {
      return this.executePrintResult()
    }
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    // 성공이나 실패후 // 재시작이 안댐
    MissionUtils.Console.readLine(MESSAGE.inputCommand, (command) => {
      this.isRetry(command);
      this.getCommand(command); // 에러 검증
     
      // Controller.playerCommand(command); // 어디서 썼지?
    });
  },

  getCommand(command) {
    try {
      if (command !== COMMAND.quit && command !== COMMAND.retry) {
        throw new Error(ERROR_MESSAGE.choose_RorQ);
      }
    } catch (err) {
        this.readGameCommand();
    }
  },

  isRetry(command) {
    const playerCommand = new BridgeGame().retry(command);
    if (playerCommand === true) {
      Controller.initializeAll();
      this.readMoving();
    }
    if (playerCommand !== true) {
      this.executePrintResult();
    }
  },

  executePrintResult(){
    Controller.checkSuccess();
    OutputView.printResult(Controller.tryCount, Controller.gameResult);
  },
};
// InputView.readMoving()
module.exports = InputView;
