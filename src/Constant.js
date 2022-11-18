const GUIDE_MESSAGE = {
    START: "다리 건너기 게임을 시작합니다. \n",
    INPUT_LENGTH: "다리의 길이를 입력해주세요. \n",
    INPUT_MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
    INPUT_TRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n",
}

const ERROR_MESSAGE = {
    LENGTH: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    MOVE: "[ERROR] 이동할 칸은 (위: U, 아래: D) 영어 대문자로만 입력해야 합니다."
}

const RESULT_MESSAGE = {
    TITTLE: "최종 게임 결과 \n",
    RESULT_TABLE: " ",
    IS_SUCCESS: "게임 성공 여부: ",
    TRY_COUNT: "총 시도한 횟수: "
}


module.exports = { GUIDE_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE }