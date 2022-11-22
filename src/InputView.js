const Io = require("./Io");
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const OutputView = require('./OutputView');
let bridgeGame;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */


const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {  
    Io.input('다리의 길이를 입력해주세요.', (userInput) => {
        if(Validation.validatePositiveInteger(userInput) || Validation.validateNumberRange(userInput))  { this.readBridgeSize() }
        const SIZE = Number(userInput);
        const BridgeStatus = BridgeMaker.makeBridge(SIZE, BridgeRandomNumberGenerator.generate);
        bridgeGame = new BridgeGame(SIZE, BridgeStatus);
        this.readMoving();
      });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(){
    Io.input('이동할 칸을 선택해주세요. (위: U, 아래: D)', (userInput) => {
      if(Validation.validateUserChoice(userInput)) { this.readMoving(); }
      console.log(bridgeGame.BridgeStatus, userInput);
      const data = bridgeGame.move(userInput);
      OutputView.printMap(bridgeGame.BridgeResultArray);
      if(data === "종료") {
        OutputView.printResult(bridgeGame.BridgeResultArray, bridgeGame.gameResult, bridgeGame.count);
        return Io.close();
      } 
      if(data === "재시작") return this.readGameCommand(); this.readMoving();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Io.input('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (userInput) => {
      if(Validation.validateUserRetryChoice(userInput)) { this.readGameCommand(); }
      if(userInput === 'R'){
        bridgeGame.retry();
        this.readMoving();
      }
      if(userInput == 'Q'){
        OutputView.printResult(bridgeGame.BridgeResultArray, bridgeGame.gameResult, bridgeGame.count);
      }
    })
  },
};

module.exports = InputView;
