const OutputPrintMessage = require("./utils/const/outputViewMessage");

const encodeMethods = {
  encodeBridgeSide(moveLength, bridgeSideStatus) {
    let printBody = "[";
    for (let { round, result } of bridgeSideStatus) {
      printBody += result === null ? "   " : result ? " O " : " X ";
      if (round !== moveLength) printBody += "|";
      if (round === moveLength) printBody += "]";
    }
  },
  encodeGameResult(gameResult) {
    const { success, trial } = gameResult;
    const succesPrintBody = `${OutputPrintMessage.result}${
      success ? `성공` : `실패`
    }`;
    const trialPrintBody = `${OutputPrintMessage.trial}${trial}`;
    return [succesPrintBody, trialPrintBody];
  },
};

module.exports = encodeMethods;
