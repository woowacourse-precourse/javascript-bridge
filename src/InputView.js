const {Console} = require("@woowacourse/mission-utils");
const Message = require("./Message");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const ErrorHandler = require("./ErrorHandler");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridgeGame: new BridgeGame(),
  count: 1,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(`${Message.INPUT_MESSAGE.BRIDGE_SIZE_TEXT}\n`, (size) => {
      if(ErrorHandler.readBridgeSizeErrorHandler(size)) {
        Console.close();
      }
      else{
        let idx = 0;
        const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
        const currentBridge = [[], []];
        this.readMoving(bridge, currentBridge, idx);
      }
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, currentBridge, idx) {
    Console.readLine(`${Message.INPUT_MESSAGE.MOVING_TEXT}\n`, (move) => {
      if (ErrorHandler.readMovingErrorHandler(move)) {
        Console.close();
      }
      else {
        const checkField = this.bridgeGame.move(bridge, currentBridge, idx, move, this.count);
        if (!checkField) {
         this.readGameCommand(bridge, currentBridge, idx);
        }
        else {
          idx = checkField[0];
          if (idx >= bridge.length) { 
            Console.close();
          }
          else{
           this.readMoving(bridge, currentBridge, idx);
          }
        }
      }
       
     })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, currentBridge, idx) {
    Console.readLine(`${Message.INPUT_MESSAGE.READ_GAME_COMMAND_TEXT}\n`, (command) => {
      if (ErrorHandler.readGameCommandErrorHandler(command)) {
        Console.close();
      }
      else {
        const checkReturn = this.bridgeGame.retry(bridge, command, currentBridge, idx, this.count);
        if (checkReturn) {
          [currentBridge, idx, this.count] = checkReturn;
          this.readMoving(bridge, currentBridge, idx);
        }
        else {
          Console.close();
        }
      }
    });
  },

};
module.exports = InputView;
