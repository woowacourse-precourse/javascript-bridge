function validateBridgeLength(length) {
  if (isNaN(length) === true || length < 3 || length > 20)
    throw Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
}

function validateDirection(direction) {
  if (direction !== "U" && direction !== "D")
    throw Error("[ERROR] 잘못된 방향입니다.");
}

function validateCommand(command) {
  if (command !== "R" && command !== "Q")
    throw Error("[ERROR] 잘못된 입력입니다.");
}

module.exports = {
  validateBridgeLength,
  validateDirection,
  validateCommand,
};
