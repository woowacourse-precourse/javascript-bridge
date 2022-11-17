const { Console } = require('console');

const checkNumberValidation = (userInput) => {
  const numberRegex = /^\d+$/g;
  if (userInput.match(numberRegex)) return true;

  Console.close();
  throw new Error('[ERROR] 다리의 길이는 숫자로 입력해야 합니다.');
};

const validateBridgeSize = (userInput) => {
  checkNumberValidation(userInput);
};

module.exports = { validateBridgeSize };
