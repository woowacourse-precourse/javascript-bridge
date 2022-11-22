const MissionUtil = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let BridgeSize;
    MissionUtil.Console.readLine("다리의 길이를 입력해주세요", (input)=>{
      if(Number(input)<3 || Number(input)>20 || isNaN(input)){
        MissionUtil.Console.print("[ERROR] 다리길이는 3부터 20 사이의 숫자여야 합니다");
      }
      else{
        BridgeSize = Number(input);
      }
      
    });
    return BridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving;
    MissionUtil.Console.readLine("이동할 칸을 선택해주세요. (위: U 아래: D) ",(input)=>{
      if(input!=="U" && input!=="D"){
        MissionUtil.Console.print("[ERROR] U 또는 D로만 입력해주세요");
        throw new Error("[ERROR] U 또는 D로만 입력해주세요");
      }
      moving = input;
      
    });
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let restart;
    MissionUtil.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시작: R 종료: Q) ", (input)=> {
      if(input!=="R" && input!=="Q"){
        MissionUtil.Console.print("[ERROR] R 또는 Q로만 입력해주세요");
        throw new Error("[ERROR] R 또는 Q로만 입력해주세요");
      }
      
      restart = input;
      
    })
    return restart;
  },
};

module.exports = InputView;
