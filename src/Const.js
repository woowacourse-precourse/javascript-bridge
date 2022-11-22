const CONST = {
    MESSAGE: {
        START: '다리 건너기 게임을 시작합니다.',
        READ_SIZE: '다리의 길이를 입력해주세요.',
        READ_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
        READ_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
        RESULT_TITLE: '최종 게임 결과',
        RESULT_PASS: '게임 성공 여부:',
        RESULT_TRIALS: '총 시도한 횟수:',
    },
    ERROR: {
        SIZE_RANGE: '[ERROR] 다리의 길이는 3 이상 20 이하의 정수만 입력 가능합니다.',
        SIZE_CHARACTER: '[ERROR] 다리의 길이는 숫자로만 입력 가능합니다.',
        SIZE_INTEGER: '[ERROR] 다리의 길이는 정수만 입력 가능합니다.',
        MOVING_ONE: '[ERROR] 이동할 칸은 한 문자만 입력 가능합니다.',
        MOVING_CAPITAL: '[ERROR] 이동할 칸은 대문자만 입력 가능합니다.',
        MOVING_CHARACTER: '[ERROR] 이동할 칸은 U 또는 D만 입력 가능합니다.',
        COMMAND_ONE: '[ERROR] 재시도 명령어는 한 문자만 입력 가능합니다.',
        COMMAND_CAPITAL: '[ERROR] 재시도 명령어는 대문자만 입력 가능합니다.',
        COMMAND_CHARACTER: '[ERROR] 재시도 명령어는 R 또는 Q만 입력 가능합니다.',
    },
    INFO: {
        LENGTH_MIN: 3,
        LENGTH_MAX: 20,
        PASS: '성공',
        FAIL: '실패',
    }
}

module.exports = CONST;