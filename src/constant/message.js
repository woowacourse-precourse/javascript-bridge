const START_NUMBER = 2;
const END_NUMBER = 20;

const gameMessage = {
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const errorMessage = {
  End_Exceed_Start: "[ERROR] end는 start보다 항상 크거나 같아야 합니다.",
  BETWEEN_NUMBER: `[ERROR] ${START_NUMBER}~${END_NUMBER} 사이의 숫자를 입력해 주세요.`,
  OUT_OF_RANGE: "[ERROR] 입력할 수 있는 숫자의 범위를 초과하였습니다.",
  NOT_ALLOWED: "[ERROR] 허용되지 않은 문자열입니다.",
};

module.exports = { gameMessage, errorMessage };
