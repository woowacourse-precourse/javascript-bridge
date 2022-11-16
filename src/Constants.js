const MESSAGE_PROCESS = Object.freeze({
    GAME_START: "다리 건너기 게임을 시작합니다.\n",
    INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n"
});

const MESSAGE_ERROR = Object.freeze({
    BRIDGE_ONLY_NUMBER: "[ERROR] 다리의 길이는 숫자로만 이루어져야 합니다.",
    BRIDGE_OUT_OF_RANGE: "[ERROR] 다리의 길이는 3 이상 20 이하의 숫자여야 합니다."
});

module.exports = {
    MESSAGE_PROCESS,
    MESSAGE_ERROR
};