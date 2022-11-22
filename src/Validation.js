const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require('./Constant')

class CheckUserInput {
  
  checkNum(userInput) {
    if(isNaN(userInput) || userInput > 20 || userInput < 3) {
      MissionUtils.Console.print(Constant.ERROR_MESSAGE.CHECK_NUM_ERROR);
    }
  }

  checkMove(userInput){
    if(userInput !== 'D' && userInput !== 'U') {
      MissionUtils.Console.print(Constant.ERROR_MESSAGE.CHECK_MOVE_ERROR)
    }
  }

  checkRetry(userInput){
    if(userInput !== 'R' && userInput !== 'Q'){
      MissionUtils.Console.print(Constant.ERROR_MESSAGE.CHECK_RERTY_ERROR);
    }
  }
}

module.exports = CheckUserInput;