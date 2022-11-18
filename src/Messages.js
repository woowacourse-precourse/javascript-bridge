const MESSAGE = Object.freeze({
    START: "다리 건너기 게임을 시작합니다.\n",
    ENTER_BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    ENTER_MOVE_TYPE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    ENTER_COMMAND: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
    GAME_RESULT: "최종 게임 결과\n",
    GAME_SUCCESS_STATE: "게임 성공 여부: ",
    GAME_TRY_COUNT: "총 시도한 횟수: "
});

const ERROR = Object.freeze({
    BRIDGE_SIZE_OUT_BOUNDARY: "[ERROR] 3이상 20이하 사이의 숫자여야 합니다.\n",
    BRIDGE_SIZE_NOT_NUMBER: "[ERROR] 입력값은 숫자여야 합니다.\n",
    INVALID_MOVE_TYPE: "[ERROR] 입력값은 U 또는 D 여야합니다.\n",
    INVALID_COMMAND: '[ERROR] 입력값은 R 또는 Q 여야합니다.\n',
    FAIL_MOVE: '[ERROR] 건널 수 없는 곳 입니다.\n'
})

module.exports = { MESSAGE, ERROR };