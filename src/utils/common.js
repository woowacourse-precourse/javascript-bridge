const isValidateNumber = (number) => {
  const numberRegex = /^[0-9]+$/g;
  if (!number.match(numberRegex)) {
    throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
  }
};

const isCollectRange = (number, min, max) => {
  if (number < min || number > max) {
    throw new Error(`[ERROR] ${min}부터 ${max}사이의 숫자만 입력할 수 있습니다.`);
  }
};

module.exports = { isValidateNumber, isCollectRange };
