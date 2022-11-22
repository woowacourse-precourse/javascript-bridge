const GAME_MESSAGES = {
    START : '다리 건너기 게임을 시작합니다.\n',
    RESULT_TITLE : '최종 게임 결과',
    RESULT_GAME : '게임 성공 여부: ',
    RESULT_TRUE : '성공',
    RESULT_FALSE : '실패',
    RESULT_TRIAL : '총 시도한 횟수: '
}

const INPUT_MESSAGES = {
    BRIDGE_SIZE : '다리의 길이를 입력해주세요.\n',
    BRIDGE_MOVE : '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    RESTART : '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n'
}

const ERROR_MESSAGES = {
    BRIDGE_SIZE : '[ERROR] 3 ~ 20 사이 숫자만 입력할 수 있습니다.\n',
    MOVING : '[ERROR] U 또는 D만 입력할 수 있습니다.\n',
    RESTART : '[ERROR] R 또는 Q만 입력할 수 있습니다.\n'
}

const RANDOM_NUMBERS = {
    UPPER : 1,
    LOWER: 0
}

const BRIDGE = {
    UP : 'U',
    DOWN : 'D',
    MATCH : 'O',
    UNMATCH : 'X',
}

const BRIDGE_PRINT = {
    START : '[ ',
    MIDDLE :' | ',
    END : ' ]'
}

const RESTART = {
    TRUE : 'R',
    FASLE : 'Q'
}

module.exports = {
    GAME_MESSAGES,
    INPUT_MESSAGES,
    ERROR_MESSAGES,
    RANDOM_NUMBERS,
    BRIDGE,
    BRIDGE_PRINT,
    RESTART 
};