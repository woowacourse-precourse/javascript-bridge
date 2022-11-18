const MissionUtils = require("@woowacourse/mission-utils");
const [Console] = [MissionUtils.Console, MissionUtils.Random];


const InputView = {

  gameStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },

  validateBridge(bridgeInput) {
    if (typeof bridgeInput !== "number") throw new Error("[ERROR] 다리길이는 숫자여야 합니다.");
    if (!(3 <= bridgeInput && bridgeInput <= 20)) throw new Error("[ERROR] 다리길이는 3에서 20사이의 숫자여야 합니다.");
  },

  readBridgeSize() {
    return new Promise((resolve, _) => {
      Console.readLine("다리의 길이를 입력해주세요.\n", (inputString) => {
        const inputNum = Number(inputString);
        this.validateBridge(inputNum);
        resolve(inputNum);
      });
    })
  },

  validateMove(move){
    Console.print(move);
    if(!(move === "U" || move ==="D")) throw new Error("[ERROR] 이동할 칸을 잘못 입력하셨습니다.");  
  },


  readMoving() {
    return new Promise((resolve, _) => {
      Console.readLine("이동할 칸을 선택해주세요. (위:U, 아래:D)\n", (inputMove) => {
        this.validateMove(inputMove);
        resolve(inputMove);
      });
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
