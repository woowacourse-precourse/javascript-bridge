const MESSAGE = {
    GAME_START : "다리 건너기 게임을 시작합니다.",
    SET_BRIDGE_LENGTH : "다리의 길이를 입력해주세요.",
    SET_UP_DOWN : "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    GAME_SELECT : "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
    GAME_RESULT : "최종 게임 결과",
}

const RESULT = {
    SUCCES_OR_FAIL : "게임 성공 여부: ",
    GAME_NUMBER_OF_ATTEMPTS : "총 시도한 횟수: "
}

const FINAL_RESULT = {
    SUCCES : "성공",
    FAIL : "실패"
}

const ERROR_MESSAGE = {
    BRIDGE_LENGTH : "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    RETRY_OR_TERMINAL : "[ERROR] 게임을 다시 시도할지 여부는 해당 문자만 입력해주세요. (재시도: R, 종료: Q)",
}

module.exports = {MESSAGE, RESULT, FINAL_RESULT, ERROR_MESSAGE};