const MissionUtils = require("@woowacourse/mission-utils");
const {
  bridgeRangeCheck,
  userMoveInputCheck,
  userRetryInputCheck,
  bridgeInputStringCheck,
  isBridgeLengthFloat,
} = require('./utils/validation')

const bridgeLengthValidate = (number)=>{
  try{
    if(!bridgeRangeCheck(number)) throw new Error("[ERROR]")
  }catch(error){
    MissionUtils.Console.print(err.message)
    return true;
  }
}

module.exports = {
  bridgeLengthValidate
}