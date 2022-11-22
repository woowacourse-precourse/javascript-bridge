
/**
 * 사용자로부터 받은 입력을 검증한다
 */
const bridgeValidation = (bridgeSize) => {
  if (isNaN(bridgeSize)) throw Error("[ERROR] 다리의 길이는 정수만 입력 가능합니다.")
  if (bridgeSize < 3 || bridgeSize > 20) throw Error("[ERROR] 다리의 길이는 3이상 20이하 입니다.");
};

const moveValidation = (command) => {
  if (command !== "U" && command !== "D") throw Error("[ERROR] 위(U) 아래(D)를 입력해주세요.");
};

const restartValidation = (command) => {
    if (command !== "R" && command !== "Q") throw Error("[ERROR] 재시작(R) 나가기(Q)를 입력해주세요.");
};

module.exports = { bridgeValidation, moveValidation, restartValidation };
