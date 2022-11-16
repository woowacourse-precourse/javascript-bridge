const MESSAGE = Object.freeze({
    START: "다리 건너기 게임을 시작합니다.",
    ENTER_BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
});

const ERROR = Object.freeze({
    BRIDGE_SIZE_OUT_BOUNDARY: "[ERROR] 3이상 20이하 사이의 숫자여야 합니다.",
    BRIDGE_SIZE_NOT_NUMBER: "[ERROR] 입력값은 숫자여야 합니다.",
})

module.exports = { MESSAGE, ERROR };