const GAME_START_MESSAGE = {
    GAME_START : "다리 건너기 게임을 시작합니다.",
}

const INPUT_MESSAGE = {
    BRIDGE_LENGTH : "다리의 길이를 입력해주세요.\n",
    MOVE_BRIDGE_UP_DOWN : "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    GAME_RESTART_QUIT : "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
};

const GAME_RESULT_MESSAGE = {
    GAME_RESULT : "최종 게임 결과",
    GAME_SUCCESS_STAUTS : "게임 성공 여부 : ",
    GAME_TRY_COUNT : "총 시도한 횟수 : ",  
};

const ERROR_MESSAGE = {
    BRIDGE_ERROR : "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    MOVE_ERROR : "[ERROR] U 또는 D를 입력해주세요.",
    RESTART_ERROR : "[ERROR] R 또는 Q를 입력해주세요."
};

const BRIDGE_MAKER = {
    START : "[",
    END : "]",
    CORRECT : " O ",
    WRONG : " X ",
    BAR : "|",
    NOTHING : "   ",
};

module.exports = { GAME_START_MESSAGE, INPUT_MESSAGE, GAME_RESULT_MESSAGE, ERROR_MESSAGE, BRIDGE_MAKER };