const Exception = {
  isThrow(validatorMethod, inputData) {
    try {
      validatorMethod(inputData);
      return true;
    } catch (error) {
      return false;
    }
  },
};

module.exports = Exception;
