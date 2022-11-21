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

const ERROR_MESSAGE = {
    NOT_BETWEEN_SIZE : "[ERROR] 다리의 길이는 3초과 20미만이여야 합니다.",
    IS_NOT_NUMBER : "[ERROR] 숫자를 입력해주세요.",
    IS_NOT_GIVEN_MOVE_VALUE : "[ERROR] U(위) 또는 D(아래)을 입력해주세요.",
    IS_NOT_GIVEN_RUNNING_VALUE : "[ERROR] Q(종료) 또는 R(재시작)을 입력해주세요. "
}

const COMMAND = {
    BRIDGE_UP : "U",
    BRIDGE_DOWN : "D",
    RESTART : "R",
    QUIT : "Q"
}

const BRIDGE_MAP = {
    CORRECT : "O",
    WRONG : "X",
    BLANK : " ",
    DIVISION : " | "
}

const CONSTRAINTS_NUMBER = {
    MAXIMUM_NUM : 20 , 
    MINIMUM_NUM : 3 ,
    BRIDGE_UP : 1 ,
    BRIDGE_DOWN : 0 ,
    TRY_COUNT : 1 ,
    TRY_INCREASE : 1 ,
    ARRAY_RESET : 0
}

module.exports = {INPUT_MESSAGE, PRINT_MESSAGE, ERROR_MESSAGE, COMMAND, BRIDGE_MAP, CONSTRAINTS_NUMBER};