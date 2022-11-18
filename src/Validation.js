const prefix = '[ERROR]';

const validateBridgeLength = userInput => {
  if (Number.isNaN(userInput))
    throw new Error(`${prefix} 다리 길이는 문자가 아닌 숫자여야 합니다.`);
  if (userInput < 3 || userInput > 20)
    throw new Error(`${prefix} 다리 길이는 3이상 20이하 숫자여야 합니다.`);
};

const validateMovingValue = userInput => {
  if (typeof userInput !== 'string')
    throw new Error(`${prefix} 'U'(위), 'D'(아래) 중 하나의 문자만 입력해주세요!`);

  if (userInput == 'u' || userInput == 'd') throw new Error(`${prefix} 대문자로 입력해주세요!`);

  if (userInput != 'U' && userInput != 'D')
    throw new Error(`${prefix} 이동할 칸은 문자 'U'(위), 'D'(아래) 중 하나여야 합니다.`);
};

module.exports = {
  validateBridgeLength,
  validateMovingValue,
};
