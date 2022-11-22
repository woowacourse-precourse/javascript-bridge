/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  BRIDGE: null,
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.\n",(size)=>{
        this.BRIDGE = Number(size);
      }
    );
  },
  bridgeSizeCheck() {
    if(!(this.BRIDGE >= 3 && this.BRIDGE <=20)){
      throw new Error("[ERROR] 다리의 길이는 3~20 사이 입니다.");
    };
  },

  bridgeTextCheck() {
    if(isNaN(this.BRIDGE)){
      throw new Error("[ERROR] 다리의 길이는 문자가 아닙니다.");
    };
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  MOVE: null,
  readMoving(game) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",(move)=>{
        this.MOVE = move;
      }
    );
    game.move(this.MOVE);
  },
  moveSelectCheck(){
    if(!(this.MOVE==="U" || this.MOVE==="D")){
      throw new Error("[ERROR] 이동하는 칸은 U 또는 Q 입니다.");
    };
  },
  moveLowerCheck(){
    if(this.MOVE === this.MOVE.toLowerCase()){
      throw new Error("[ERROR] 이동하는 칸은 대문자로 입력해야 합니다.");
    };
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  COMMAND: null,
  readGameCommand(game) {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",(command)=>{
        this.COMMAND = command;
      }
    );
    game.retry(this.COMMAND);
  },
};

module.exports = InputView;
