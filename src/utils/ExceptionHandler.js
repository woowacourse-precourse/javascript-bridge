const ExceptionHandler = {
  checkBridgeSize(size) {
    if (!Number.isInteger(Number.parseInt(size, 10)))
      throw new Error(`다리는 숫자만 입력할 수 있습니다.`);
    if (size < 3 || size > 29)
      throw new Error(`다리는 3 이상 20 이하의 숫자입니다.`);
  },
  checkDirection(direction) {
    if (direction !== "U" && direction !== "D")
      throw new Error("U나 D를 입력해주세요.");
  },
  checkGameCommand(command) {
    if (command !== "R" && command !== "Q")
      throw new Error("R이나 Q를 입력해주세요.");
  },
};

module.exports = ExceptionHandler;
