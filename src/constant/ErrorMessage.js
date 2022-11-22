const BRIDGE_ERROR = {
  notANumber: "[ERROR] 숫자 하나만 입력해주세요.",
  outOfRange: "[ERROR] 3 이상 20 이하의 값을 입력해주세요.",
};

const MOVE_ERROR = {
  wrongChar: "[ERROR] 이동할 수 있는 칸은 U 또는 D 뿐입니다.",
};

const RETRY_ERROR = {
  wrongChar: "[ERROR] 재시도하려면 R, 종료하려면 Q를 입력해주세요.",
};

module.exports = { BRIDGE_ERROR, MOVE_ERROR, RETRY_ERROR };
