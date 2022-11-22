const OutputPrintMessage = require("../../lib/const/outputViewMessage");

const encodeMethods = {
  encodeBridgeSide(currentRound, bridgeSideStatus) {
    let printBody = "[";
    for (let round = 0; round < bridgeSideStatus.length; round++) {
      const result = bridgeSideStatus[round];
      printBody += result === null ? "   " : result ? " O " : " X ";
      if (round !== currentRound) printBody += "|";
      if (round === currentRound) printBody += "]";
    }
    return printBody;
  },
  encodeGameResult(gameStatus) {
    const { success, trial } = gameStatus;
    const succesPrintBody = `${OutputPrintMessage.result}${
      success ? `성공` : `실패`
    }`;
    const trialPrintBody = `${OutputPrintMessage.trial}${trial}`;
    return [succesPrintBody, trialPrintBody];
  },
};

module.exports = encodeMethods;
