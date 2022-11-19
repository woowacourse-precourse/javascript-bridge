const { Console } = require('@woowacourse/mission-utils');

const isValidateNumber = (number) => {
  const numberRegex = /^[0-9]+$/g;
  if (!number.match(numberRegex)) {
    Console.close();
    throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
  }
};

const isCollectRange = (number) => {
  if (number < 3 || number > 20) {
    Console.close();
    throw new Error('[ERROR] 3부터 20사이의 숫자만 입력할 수 있습니다.');
  }
};

module.exports = { isValidateNumber, isCollectRange };
