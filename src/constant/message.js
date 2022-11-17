const MESSAGE = {
    START: "다리 건너기 게임을 시작합니다.\n",
    SIZE: "다리의 길이를 입력해주세요.\n",
    MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
    RESTART: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
    SUCCESS: "게임 성공 여부: 성공",
    FAIL: "게임 성공 여부: 실패",
    TRY: "총 시도한 횟수: ",
};

const STRUCTURE = {
    ENTRANCE: "[",
    LINK: "|",
    EXIT: "]",
    GOOD: " O ",
    BAD: " X ",
};

module.exports = { MESSAGE, STRUCTURE };
