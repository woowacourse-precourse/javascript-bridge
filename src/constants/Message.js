const GAME_RESULT = '최종 게임 결과';
const GAME_WIN = '게임 성공 여부: 성공';
const GAME_FAIL = '게임 성공 여부: 실패';
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
const PUT_NEXT_SPACE = '이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const PUT_RETRY_OR_NOT = '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';

const INPUT_MESSAGE = {
    PUT_BRIDGE_LENGTH,
    PUT_NEXT_SPACE,
    PUT_RETRY_OR_NOT,
}

const IS_EMPTY = '[ERROR] 값을 입력해주세요.';
const IS_NUMBER = '[ERROR] 숫자를 입력해주세요.';
const NUMBER_NET = '[ERROR] 3과 20사이의 값을 입력해주세요.';

const BRIDGE_LENGTH = {
    IS_EMPTY,
    IS_NUMBER,
    NUMBER_NET,
}


const NEXT_STEP_LOWER_CASE = '[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.';
const NEXT_STEP_VALUE = '[ERROR] U 또는 D를 입력해주세요.';

const NEXT_STEP = {
    NEXT_STEP_LOWER_CASE,
    NEXT_STEP_VALUE,
}

const RETRY_LOWER_CASE = '[ERROR] 소문자로 입력하셨습니다. 대문자로 입력해주세요.';
const RETRY_OR_NOT_VALUE = '[ERROR] R 또는 Q를 입력해주세요.';

const RETRY = {
    RETRY_LOWER_CASE,
    RETRY_OR_NOT_VALUE,
}

const IS_NUMBER_EMPTY = '[ERROR] 값을 입력해주세요.';
const ONE_VALUE = '[ERROR] 1개의 값을 입력해주세요.';

module.exports = {
    OUTPUT_MESSAGE,
    INPUT_MESSAGE,
    BRIDGE_LENGTH,
    NEXT_STEP,
    RETRY,
    IS_NUMBER_EMPTY,
    ONE_VALUE,
}
