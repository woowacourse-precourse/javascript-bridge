const ASK = {
    GAME_START: "다리의 길이를 입력해주세요.",
    USER_INPUT: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    CONTINUE_INPUT: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const RESULT = {
    INFORMATION: "최종 게임 결과",
    SUCCESS_FAIL: "게임 성공 여부: ",
    TOTAL: "총 시도한 횟수: ",
};

const ERROR = {
    NUM_ERROR: "[ERROR] 다리의 길이는 숫자입니다.",
    RANGE_ERROR: "[ERROR] 다리의 길이는 3에서 20 사이의 숫자입니다.",
    INPUT_ERROR: "[ERROR] U(위) 또는 D(아래)를 통해 이동 가능합니다.",
    GAMEOVER_ERROR: "[ERROR] 재시작은 R, 종료는 Q를 입력해주세요.",
};

module.exports = { ASK, RESULT, ERROR };