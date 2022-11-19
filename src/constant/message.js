const MESSAGE = {
    START: "다리 건너기 게임을 시작합니다.\n",
    SIZE: "다리의 길이를 입력해주세요.\n",
    MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
    SUCCESS: "게임 성공 여부: 성공",
    FAIL: "게임 성공 여부: 실패",
    FINISH: "최종 게임 결과",
    TRY: "총 시도한 횟수: ",
};

const OPTION = {
    MINIMUM_LENGTH: 3,
    MAXIMUM_LENGTH: 20,
};

const STRUCTURE = {
    ENTRANCE: "[",
    LINK: "|",
    EXIT: "]",
    GOOD: " O ",
    BAD: " X ",
    BLANK: "   ",
};

const KEY = {
    UP: "U",
    DOWN: "D",
    RESTART: "R",
    QUIT: "Q",
};

const ERROR = {
    BRIDGE_OVER_RANGE: "[ERROR] 다리 길이는 3에서 20사이의 자연수를 입력해주세요.",
    BRIDGE_INVALID_NUMBER: "[ERROR] 유효하지 않은 입력입니다.",
    MOVE: '[ERROR] 위로 이동하려면 "U" 아래로 이동하려면 "D"를 입력해주세요.',
    RESTART: '[ERROR] 다시 시작하려면 "R" 종료하려면 "Q"를 입력해주세요.',
};

module.exports = { MESSAGE, OPTION, STRUCTURE, KEY, ERROR };
