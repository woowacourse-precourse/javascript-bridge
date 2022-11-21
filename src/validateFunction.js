const MissionUtils = require("@woowacourse/mission-utils");
const {
  bridgeRangeCheck,
  userMoveInputCheck,
  userRetryInputCheck,
  isBridgeLengthFloat,
} = require('./utils/validation')

const bridgeLengthValidate = (number)=>{
  try{
    if(!bridgeRangeCheck(number)) throw new Error("[ERROR]")

    if(!isBridgeLengthFloat(number)) throw new Error("[ERROR]")
  }catch(error){
    MissionUtils.Console.print(error.message)
    return true;
  }
}

module.exports = {
  bridgeLengthValidate
}