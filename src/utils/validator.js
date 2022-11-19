const { throwError } = require('./error');
const { ERROR } = require('../constants/bridge');

const isVaildSize = (number) => {
  if (number >= 3 && number <= 20) return;
  throwError(ERROR.NOT_VALID_SIZE);
};

module.exports = {
  isVaildSize,
};
