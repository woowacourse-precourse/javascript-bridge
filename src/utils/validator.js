const { isCollectRange, isValidateNumber } = require('./validation');

const isCollectBridgeLength = (input) => {
  isValidateNumber(input);
  isCollectRange(input);
};

module.exports = { isCollectBridgeLength };
