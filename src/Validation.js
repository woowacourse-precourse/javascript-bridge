const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require('./Constant')

class CheckUserInput {
  
  checkNum(userInput) {
    if(isNaN(userInput) || userInput > 20 || userInput < 3) {
      throw new Error;
    } else {
      return true
    }
  }

  checkMove(userInput){
    if(userInput !== 'D' && userInput !== 'U') {
      throw new Error
    } else {
      return true
    }
  }

  checkRetry(userInput){
    if(userInput !== 'R' && userInput !== 'Q'){
      throw new Error
    } else {
      return true
    }
  }
}

module.exports = CheckUserInput;