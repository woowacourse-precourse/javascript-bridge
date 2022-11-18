const GAME_RESULT = '최종 게임 결과';
const GAME_WIN = '게임성공 여부: 성공';
const GAME_FAIL = '게임성공 여부: 실패';
const GAME_ATTEMPT = '총 시도한 횟수:';
const GAME_START = '다리 건너기 게임을 시작합니다.\n';

const OUTPUT_MESSAGE = {
    GAME_RESULT,
    GAME_WIN,
    GAME_FAIL,
    GAME_ATTEMPT,
    GAME_START,
}

const PUT_BRIDGE_LENGTH = '다리의 길이를 입력해주세요.\n';
const PUT_NEXT_SPACE = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const PUT_RETRY_OR_NOT = '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)';

const INPUT_MESSAGE = {
    PUT_BRIDGE_LENGTH,
    PUT_NEXT_SPACE,
    PUT_RETRY_OR_NOT,
}

module.exports = {
    OUTPUT_MESSAGE,
    INPUT_MESSAGE,
}
