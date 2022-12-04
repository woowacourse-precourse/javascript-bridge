const INPUT_MESSAGES = {
    BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
    MOVE_SQUARE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const OUTPUT_MESSAGES = {
    START_GAME: "다리 건너기 게임을 시작합니다.\n",
    RESULT: "최종 게임 결과\n",
    GAME_SUCCESS: (n) => `게임 성공 여부: ${n}`,
    ATTEMPTS: (n) => `총 시도한 횟수: ${n}`,
};

const ERROR_MESSAGES = {
    LENGTH_ERROR: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    SQUARE_ERROR: "[ERROR] 이동할 칸은 U 또는 D로 입력해야 합니다. (위: U, 아래: D)",
    RETRY_ERROR: "[ERROR] 종료하려면 R 또는 Q를 입력해주세요.",
};

module.exports = {
    INPUT_MESSAGES,
    OUTPUT_MESSAGES,
    ERROR_MESSAGES,
}