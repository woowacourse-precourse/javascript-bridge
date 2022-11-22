const {
  UP,
DOWN,
RESTART,
QUIT
} = require("./constant")

const bridgeRangeCheck = (number)=>{
  return number>=3 && number<=20
}

const userMoveInputCheck = (move)=>{
  return move===UP || move===DOWN
}

const userRetryInputCheck = (retry)=>{
  return retry===RESTART || retry===QUIT
}

const isBridgeLengthFloat = (number)=>{
  return !number.includes('.');
}

module.exports = {
  bridgeRangeCheck,
  userMoveInputCheck,
  userRetryInputCheck,
  isBridgeLengthFloat,
};