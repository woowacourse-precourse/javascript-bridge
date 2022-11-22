const MissionUtils = require("@woowacourse/mission-utils");
const {
  bridgeRangeCheck,
  userMoveInputCheck,
  userRetryInputCheck,
  isBridgeLengthFloat,
} = require('./utils/validation')

const { 
  RANGE_BRIDGE_NUMBER_ERROR,
  PLAYER_INPUT_ERROR,
  PLAYER_RETRY_INPUT_ERROR,
  PLAYER_FLOAT_INPUT_ERROR
 } = require("./utils/constant")

const bridgeLengthValidate = (number)=>{
  try{
    if(!bridgeRangeCheck(number)) throw new Error(RANGE_BRIDGE_NUMBER_ERROR)

    if(!isBridgeLengthFloat(number)) throw new Error(PLAYER_FLOAT_INPUT_ERROR)
  }catch(error){
    MissionUtils.Console.print(error.message)
    return true;
  }
}

const userMoveValidate = (move)=>{
  try{
    if(!userMoveInputCheck(move)) throw new Error(PLAYER_INPUT_ERROR)
  }catch(error){
    MissionUtils.Console.print(error.message)
    return true;
  }
}

const userRetryValidate = (retry)=>{
  try{
    if(!userRetryInputCheck(retry)) throw new Error(PLAYER_RETRY_INPUT_ERROR)
  }catch(error){
    MissionUtils.Console.print(error.message)
    return true;
  }
}

module.exports = {
  bridgeLengthValidate,
  userMoveValidate,
  userRetryValidate
}