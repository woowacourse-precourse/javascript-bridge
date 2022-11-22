const MESSAGE = {
    PUT_SIZE : `다리의 길이를 입력해주세요.\n`,
    PUT_MOVE : `이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
    PUT_COMMAND : `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
    GAME_START : '다리 건너기 게임을 시작합니다.\n',
    RESULT : `최종 게임 결과`,
}

const ERROR = {
    SIZE_INPUT_ERROR : `[ERROR] 3~20범위 정수를 입력해주세요.`,
    MOVE_INPUT_ERROR: `[ERROR] U또는 D값을 입력해주세요.`,
    COMMAND_INPUT_ERROR : `[ERROR] R또는 Q값을 입력해주세요.`,
}


module.exports = {MESSAGE, ERROR};