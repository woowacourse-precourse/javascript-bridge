const BRIDGE ={
    LENGTH_RANGE_LEFT : 3,
    LENGTH_RANGE_RIGHT : 20,
    INPUT_RANGE : ["U", "D"],
    LEFT_SIDE : "[",
    EMPTY : "   ",
    DELIMITER : "|",
    RIGHT_SIDE : "]",
    MOVE_SUCCESS : " O ",
    MOVE_FAIL : " X "
};

const MESSAGE = {
    GAME_START : "다리 건너기 게임을 시작합니다.",
    FINAL_RESULT : "최종 게임 결과",
    IS_WIN : "게임 성공 여부: ",
    WIN : "성공",
    LOSS : "실패",
    ATTEMPT_TIMES : "총 시도한 횟수: ",
}

const USER_ANSWER = {
    RETRY : "R",
    QUIT : "Q",
}

const QUERY = {
    BRIDGE_LENGTH : "다리의 길이를 입력해주세요.\n",
    MOVE_DIRECTION : "이동할 칸을 선택해주세요. (위: "+BRIDGE.INPUT_RANGE[0]+", 아래: "+BRIDGE.INPUT_RANGE[1]+")\n",
    GAME_RESTART : "게임을 다시 시도할지 여부를 입력해주세요. (재시도: "+USER_ANSWER.RETRY+", 종료: "+USER_ANSWER.QUIT+")\n",
}

const ERROR = {
    HEADER : "[ERROR] ",
    BRIDGE_LENGTH : "다리의 길이는 3이상 20이하의 정수입니다.",
    MOVE_DIRECTION : "이동은 (위: "+BRIDGE.INPUT_RANGE[0]+", 아래: "+BRIDGE.INPUT_RANGE[1]+") 로만 가능합니다.",
    GAME_COMMAND : "재시작 입력은 (재시도: "+USER_ANSWER.RETRY+", 종료: "+USER_ANSWER.QUIT+")로만 가능합니다."
}

module.exports = { BRIDGE, MESSAGE, USER_ANSWER, QUERY, ERROR };