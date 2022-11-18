const isValidateBridgeSize = (size) => {
  const regExp = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;
  return regExp.test(size);
};

const isValidateRoundInput = (input) => {
  const regExp = /U|D/;
  return regExp.test(input);
};

const isValidateRetryInput = (input) => {
  const regExp = /R|Q/;
  return regExp.test(input);
};

module.exports = { isValidateBridgeSize, isValidateRoundInput, isValidateRetryInput };
