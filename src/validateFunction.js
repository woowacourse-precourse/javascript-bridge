const {
  bridgeRangeCheck,
  userMoveInputCheck,
  userRetryInputCheck,
  bridgeInputStringCheck,
  isBridgeLengthFloat,
} = require('./utils/validation')

const bridgeLengthValidate = (number)=>{
  if(!bridgeRangeCheck(number)) throw new Error("[ERROR]")
}

module.exports = {
  bridgeLengthValidate
}