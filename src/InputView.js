const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const BridgeMaker = require("./BridgeMaker");
const InputCheck = require('./InputCheck');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
function generateRandomNumber(){
  return BridgeRandomNumberGenerator.generate();
}
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (length) => {
      const inputCheck = new InputCheck();
      inputCheck.lengthCheck(length);
      const bridge=BridgeMaker.makeBridge(length,generateRandomNumber);
      this.readMoving(bridge,[],1);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge,previous,attempt) {
    let steps = previous;
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (step) => {
      const inputCheck = new InputCheck();
      inputCheck.stepCheck(step);
      steps+=step;
      const bridgeGame = new BridgeGame();
      if(bridgeGame.move(bridge,steps)){
        OutputView.printMap(bridge,steps);
        if(steps.length!=bridge.length){
          this.readMoving(bridge,steps,attempt);
        }else{
          Console.print("최종 게임 결과");
          OutputView.printMap(bridge,steps);
          OutputView.printResult(true,attempt);
          Console.close();
        }
      }else{
        OutputView.printMap(bridge,steps);
        this.readGameCommand(bridge,attempt);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge,attempt) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (retry) => {
      const inputCheck = new InputCheck();
      inputCheck.retryCheck(retry);
      const bridgeGame = new BridgeGame();
      //bridgeGame.retry(bridge,retry,attempt);
      if(retry=="R"){
        InputView.readMoving(bridge,[],attempt+1);
      }else if(retry=="Q"){
        OutputView.printResult(false,attempt);
        Console.close();
      }
    })
  },
};
module.exports = InputView;
