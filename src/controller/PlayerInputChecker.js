const Validator = require('../utils/Validator');

const PlayerInputChecker = {
  checkDirection(direction) {
    Validator.checkTruthy(direction);
    Validator.checkStringType(direction);
    Validator.checkDirectionLength(direction);
    Validator.checkDirectionIncludes(direction);
  },
};

module.exports = PlayerInputChecker;
