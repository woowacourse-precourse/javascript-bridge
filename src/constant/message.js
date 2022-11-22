const gameMessage = {
  bridgeSize: "다리의 길이를 입력해주세요.\n",
  move: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  retry: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const errorMessage = {
  endExceedsStart: "[ERROR] end는 start보다 항상 크거나 같아야 합니다.",
  betweenNumber(start, end) {
    return `[ERROR] ${start}~${end} 사이의 숫자를 입력해 주세요.`;
  },
  outOfRange: "[ERROR] 입력할 수 있는 숫자의 범위를 초과하였습니다.",
  notAllowed: "[ERROR] 허용되지 않은 문자열입니다.",
};

module.exports = { gameMessage, errorMessage };
