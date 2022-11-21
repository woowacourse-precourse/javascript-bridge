/**
 * 예외처리용
 */
const CheckException = {
  checkValidBridgeLength(length) {
    if (length < 3 && length > 20) {
      throw "[ERROR] invalid bridge length";
    }
    return true;
  },
  checkValidMove(move) {
    if (move !== "U" && move !== "D") {
      throw "[ERROR] invalid moving";
    }
    return true;
  },
  checkValidEnd(endMessage) {
    if (endMessage !== "R" && endMessage !== "Q") {
      throw "[ERROR] invalid end message";
    }
    return true;
  },
};

module.exports = CheckException;
