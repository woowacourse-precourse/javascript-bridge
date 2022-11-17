const isValidateBridgeSize = (size) => {
  const regExp = /^[3-9]{1}$|^1{1}[0-9]{1}$|^2{1}0{1}$/;
  return regExp.test(size);
};

module.exports = { isValidateBridgeSize };
