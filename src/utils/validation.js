const bridgeRangeCheck = (number)=>{
  return Number(number)>=3 && Number(number)<=20
}

const userMoveInputCheck = (move)=>{
  return move==="U" || move==="D"
}

const userRetryInputCheck = (retry)=>{
  return retry==="R" || retry==="Q"
}

const bridgeInputStringCheck = (number)=>{
  return !isNaN(number)
}

const isBridgeLengthFloat = (number)=>{
  return !number.includes('.');
}

const isBridgeLengthVaccum = (number)=>{
  return !(number ===" ");
}

module.exports = {
  bridgeRangeCheck,
  userMoveInputCheck,
  userRetryInputCheck,
  bridgeInputStringCheck,
  isBridgeLengthFloat,
  isBridgeLengthVaccum
};