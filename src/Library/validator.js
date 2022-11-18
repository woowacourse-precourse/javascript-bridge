const IsNaturalNumber = (sentence) => {
  if (isNaN(sentence)) {
    return false;
  }
  const REAL_NUMBER = parseFloat(sentence);
  if (REAL_NUMBER <= 0 || REAL_NUMBER % 1 !== 0) {
    return false;
  }
  return true;
};

// const BridgeLen = (bridgeLen) => {
//   if (IsNaturalNumber(bridgeLen) === false) {

//   }
// };
