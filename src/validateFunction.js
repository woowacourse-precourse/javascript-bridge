const {
  bridgeRangeCheck,
  userMoveInputCheck,
  userRetryInputCheck,
  bridgeInputStringCheck,
  isBridgeLengthFloat,
  isBridgeLengthVaccum
} = require('./utils/validation')

const bridgeLengthValidate = (number)=>{
  if(!bridgeRangeCheck(number)) throw new Error()
}

module.exports = {
  bridgeLengthValidate
}