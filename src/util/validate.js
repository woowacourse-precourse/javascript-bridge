const { ERROR_MESSAGE } = require("./messages");

function validateBrigeSize(size) {
  if (!Number.isInteger(size)) throw new Error(ERROR_MESSAGE.sizeInteger);
  if (size < 3 || size > 20) throw new Error(ERROR_MESSAGE.sizeRange);

  return true;
}

module.exports = { validateBrigeSize };
