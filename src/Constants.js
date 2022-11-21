const INPUT_MESSAGE = {
    BRIDGE_SIZE_MESSAGE : "다리의 길이를 입력해주세요.",
    MOVE_MESSAGE : "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    GAME_RUNNING_MASSAGE : "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)"
}

const PRINT_MESSAGE = {
    GAME_START : "다리 건너기 게임을 시작합니다.\n",
    FINAL_GAME_RESULT : "최종 게임 결과\n",
    GAME_RESULT_SUCESS : "게임 성공 여부: 성공\n",
    GAME_RESULT_FAIL : "게임 성공 여부: 실패\n",
    GAME_TOTAL_TRY : "총 시도한 횟수: "
}

module.exports = {INPUT_MESSAGE, PRINT_MESSAGE};