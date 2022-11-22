const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
class InputCheck {
  lengthCheck(input) {
    if(isNaN(input) || input>20 || input<3){
      Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  }
  stepCheck(input){
    if(input!="D" && input!="U"){
      Console.print("[ERROR] 이동할 칸은 U 또는 D여야 합니다.(위: U, 아래: D)")
    }
  }
  retryCheck(input){
    if(input!="R" && input!="Q"){
      Console.print("[ERROR] 종료하려면 R 또는 Q를 입력하세요.");
    }
  }
}

module.exports = InputCheck;