const Validator = {
  validBridgeSize(size) {
    return size >= 3 && size <= 20;
  },
};

module.exports = Validator;
