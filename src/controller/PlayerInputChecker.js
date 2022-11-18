const Validator = require('../utils/Validator');

const PlayerInputChecker = {
  checkDirection(direction) {
    Validator.checkTruthy(direction);
    Validator.checkStringType(direction);
    Validator.checkPlayerInputLength(direction);
    Validator.checkDirectionIncludes(direction);
  },

  checkSelect(select) {
    Validator.checkTruthy(select);
    Validator.checkStringType(select);
    Validator.checkPlayerInputLength(select);
    Validator.checkSelectIncludes(select);
  },
};

module.exports = PlayerInputChecker;
