const { Random } = require("@woowacourse/mission-utils");

function generateRandomNumber() {
  return Random.pickNumberInRange(0, 1);
}

module.exports = { generateRandomNumber };
