const INPUT = Object.freeze({
    BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
    MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    RETRY_OR_END: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
});

const OUTPUT = Object.freeze({
    SPACE: ' ',
    START: '다리 건너기 게임을 시작합니다.\n',
    SUCCESS: '성공',
    FAIL: '실패',
    RESULT_TEXT: '최종 게임 결과',
});

const MAP = Object.freeze({
    PRINT_MAP: (map) => `[ ${map.join(' | ')} ]`
});

const RESULT = Object.freeze({
    SUCCESS_OR_FAIL: (checkForSuccess) => `게임 성공 여부: ${checkForSuccess}`,
    TRY_COUNT: (tryCount) => `총 시도한 횟수: ${tryCount}`
});

const ERROR = Object.freeze({
    NOT_NUMBER: '[ERROR] 다리 길이는 숫자여야 합니다.',
    NOT_INTEGER: '[ERROR] 다리 길이는 실수가 아닌 정수여야 합니다.',
    RANGE_IS_WRONG: '[ERROR] 다리 길이는 3 이상 20 이하의 숫자여야 합니다.',
    PLEASE_INPUT_U_OR_D: '[ERROR] 이동할 칸을 선택하기 위해선 \'U\' 또는 \'D\'를 입력해야 합니다.',
    PLEASE_INPUT_R_OR_Q: '[ERROR] 재시도하려면 \'R\'를, 종료하려면 \'Q\'를 입력해야 합니다.',
});

module.exports = { INPUT, OUTPUT, MAP, RESULT, ERROR };
