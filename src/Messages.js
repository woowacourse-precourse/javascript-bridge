/**
 * 출력 문구들을 저장하고 있는 객체
 */
const MESSAGE = Object.freeze({
    START: "다리 건너기 게임을 시작합니다.\n",
    ENTER_BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    ENTER_MOVE_TYPE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    ENTER_COMMAND: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
    GAME_RESULT: "최종 게임 결과\n",
    GAME_SUCCESS_STATE: "게임 성공 여부: ",
    GAME_TRY_COUNT: "총 시도한 횟수: "
});

module.exports = { MESSAGE };