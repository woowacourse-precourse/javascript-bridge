const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./messages");

function validateBrigeSize(size) {
  if (!Number.isInteger(size)) return closeWithError(ERROR_MESSAGE.sizeInteger);
  if (size < 3 || size > 20) return closeWithError(ERROR_MESSAGE.sizeRange);

  return true;
}

function validateMoving(choice) {
  if (choice === "U" || choice === "D") return true;

  return closeWithError(ERROR_MESSAGE.choice);
}

function closeWithError(printStr) {
  Console.print(printStr);
  Console.close();
}

module.exports = { validateBrigeSize, validateMoving, closeWithError };
