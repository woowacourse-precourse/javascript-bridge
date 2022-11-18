const checkBridgeLength = (answer) => {
  if (typeof answer !== "number" || isNaN(answer) || answer < 3 || answer > 20) {
    throw new Error("[ERROR] 3 이상 20 이하인 숫자를 입력해주세요.");
  }
};

const checkUpOrDown = (answer) => {
  if (typeof answer !== "string" || !(["U", "D"].includes(answer))) {
    throw new Error("[ERROR] U(위) 또는 D(아래)를 입력해주세요.");
  }
};

module.exports = {
  checkBridgeLength,
  checkUpOrDown,
};
