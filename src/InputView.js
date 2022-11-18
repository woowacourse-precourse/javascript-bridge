const MissionUtils = require("@woowacourse/mission-utils");
const [Console] = [MissionUtils.Console, MissionUtils.Random];


const InputView = {

  validateBridge(bridgeInput){
    if(typeof bridgeInput !== "number") throw new Error("[ERROR] 다리길이는 숫자여야 합니다.");
    if(!(3<=bridgeInput && bridgeInput<=20)) throw new Error("[ERROR] 다리길이는 3에서 20사이의 숫자여야 합니다.");
  },

  gameStart(){
    Console.print("다리 건너기 게임을 시작합니다.");
  },

  readBridgeSize() {
    return new Promise((resolve,_) => {
      Console.readLine("다리의 길이를 입력해주세요.\n", (inputString)=>{
        const inputNum = Number(inputString);
        this.validateBridge(inputNum);
        resolve(inputNum);
        Console.close();
      });
    })
  },

  getBridgeSize(){
    return this.bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
