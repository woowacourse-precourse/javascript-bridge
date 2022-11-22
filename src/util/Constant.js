const GAME_MESSAGE = Object.freeze({
    START: "다리 건너기 게임을 시작합니다.",
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    MOVE: "\n이동할 칸을 선택해주세요. (위:U, 아래:D)\n",
    RESTART: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
    RESULT: "최종 게임 결과\n",
    ISSUCCESS: "게임 성공 여부:",
    TOTALCOUNT: "총 시도한 횟수:",
});

const ERROR_MESSAGE = Object.freeze({
    BRIDGE_TYPE: "[ERROR] 다리길이는 숫자여야 합니다.",
    BRIDGE_RANGE: "[ERROR] 다리길이는 3에서 20사이의 숫자여야 합니다.",
    MOVE: "[ERROR] 이동할 칸을 잘못 입력하셨습니다.",
    COMMAND: "[ERROR] 다시시도 여부를 잘못 입력하셨습니다.",
});

const RESULT = {
    SUCCESS: "성공",
    FAIL: "실패",
}

const BRIDGE = Object.freeze({
    MIN_LENGTH: 3,
    MAX_LENGTH: 20,
    CAN_MOVE: "O",
    CANNOT_MOVE: "X",
    BLANK: " ",
});

const JOINER = Object.freeze({
    START: "[ ",
    SEPARATOR: " | ",
    END: " ]",
})

const DIRECTION = Object.freeze({
    UP: "U",
    DOWN: "D",
});

const COMMAND = Object.freeze({
    RESTART: "R",
    QUIT: "Q",
})


module.exports =
{
    GAME_MESSAGE,
    ERROR_MESSAGE,
    BRIDGE,
    DIRECTION,
    COMMAND,
    RESULT,
    JOINER,
}