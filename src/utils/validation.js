const bridgeRangeCheck = (number)=>{
  return number>=3 && number<=20
}

const userMoveInputCheck = (move)=>{
  return move==="U" || move==="D"
}

const userRetryInputCheck = (retry)=>{
  return retry==="R" || retry==="Q"
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