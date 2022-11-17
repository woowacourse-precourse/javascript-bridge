const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const withError = (validate, current, next) => (inputs) => {
  try {
    next(validate(inputs));
  } catch (err) {
    Console.print(err.message);
    current();
  }
};

module.exports = withError;
