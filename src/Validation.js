const prefix = '[ERROR]';
const validateBridgeLength = userInput => {
  if (Number.isNaN(userInput))
    throw new Error(`${prefix} 다리 길이는 문자가 아닌 숫자여야 합니다.`);
  if (userInput < 3 || userInput > 20)
    throw new Error(`${prefix} 다리 길이는 3이상 20이하 숫자여야 합니다.`);
};

module.exports = {
  validateBridgeLength,
};
