const START_MESSAGE = {
    START_TEXT: "다리 건너기 게임을 시작합니다.",
}

const INPUT_MESSAGE = {
    BRIDGE_SIZE_TEXT: "다리의 길이를 입력해주세요.",
    MOVING_TEXT: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    READ_GAME_COMMAND_TEXT:"게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
}

const RESULT_MESSAGE = {
    RESULT_TEXT: "최종 게임 결과",
    PASS_OR_NOT_TEXT: "게임 성공 여부",
    COUNT: "총 시도한 횟수",
    PASS: "성공",
    FAIL: "실패",
}

module.exports = { START_MESSAGE, INPUT_MESSAGE, RESULT_MESSAGE };
