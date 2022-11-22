const MissionUtils = require("@woowacourse/mission-utils");

class CheckUserInput {
  
  checkNum(userInput) {
    if(isNaN(userInput) || userInput > 20 || userInput < 3) {
      MissionUtils.Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  }

  checkMove(userInput){
    if(userInput !== 'D' && userInput !== 'U') {
      MissionUtils.Console.print('[ERROR] 이동할 칸은 U 또는 D여야 합니다.(위: U, 아래: D)')
    }
  }

  checkRetry(userInput){
    if(userInput !== 'R' && userInput !== 'Q'){
      MissionUtils.Console.print("[ERROR] 종료하려면 R 또는 Q를 입력하세요.");
    }
  }
}

module.exports = CheckUserInput;