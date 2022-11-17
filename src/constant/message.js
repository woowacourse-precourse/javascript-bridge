const MESSAGE = Object.freeze({
    GAME_START : "다리 건너기 게임을 시작합니다.",
    BRIDGE_SIZE : "다리의 길이를 입력해주세요.",
    MOVE : "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    RE_GAME : "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
    SUCCESS : "게임 성공 여부: 성공",
    FAIL : "게임 성공 여부: 실패",
    GAME_RESULT : "총 시도한 횟수: "
});

const ERROR_MESSAGE = Object.freeze({
    ERROR_SIZE : "[ERROR] 입력한 다리 길이가 올바르지 않습니다. 3 ~ 20 사이의 값을 입력해주세요."
});


module.exports = {MESSAGE, ERROR_MESSAGE};
