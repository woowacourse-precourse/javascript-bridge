const bridgeLengthValidate = (input) => {
  if (input < 3 || input > 20) return false;
  if (isNaN(input)) return false;
  return true;
};

module.exports = bridgeLengthValidate;
