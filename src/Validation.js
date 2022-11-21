const {ERROR} = require('./Constants');

const Validation = {
  checkBridgeSize(size) {
    if (/[^\d]+/g.test(size)) throw new Error(ERROR.NOT_NUMBER);
    if (size < 3 || size > 20) throw new Error(ERROR.NOT_THREE_TO_TWENTY);
  },
};

module.exports = Validation;
