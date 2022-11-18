const validateBridgeSize = (bridgeSizeString) => {
  const bridgeSize = Number(bridgeSizeString);
  if (!bridgeSize) {
    throw '[ERROR] 다리 길이는 숫자로 입력하여야 합니다.';
  }
  if (!(bridgeSize >= 3 && bridgeSize <= 20)) {
    throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
  }
};

const validateDirection = (direction) => {
  const directionRegExp = /^U{1}$|^D{1}$/;
  if (!directionRegExp.test(direction)) {
    throw '[ERROR] "U" 또는 "D" 중 한 알파벳을 입력해야 합니다.';
  }
};

const validateGameCommand = (command) => {
  const commandRegExp = /^R{1}$|^Q{1}$/;
  if (!commandRegExp.test(command)) {
    throw '[ERROR] "R" 또는 "Q" 중 한 알파벳을 입력해야 합니다.';
  }
};

module.exports = {
  validateBridgeSize,
  validateDirection,
  validateGameCommand,
};
