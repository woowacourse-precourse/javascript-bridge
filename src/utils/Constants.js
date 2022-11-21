const GAME_MESSAGES = {
    START : '다리 건너기 게임을 시작합니다.\n'
}

const INPUT_MESSAGES = {
    BRIDGE_SIZE : '다리의 길이를 입력해주세요.\n',
    BRIDGE_MOVE : '이동할 칸을 선택해주세요. (위: U, 아래: D)\n'
}

const ERROR_MESSAGES = {
    BRIDGE_SIZE : '[ERROR] 3 ~ 20 사이 숫자만 입력할 수 있습니다.\n',
    MOVING : '[ERROR] U 또는 D만 입력할 수 있습니다.\n'
}

const RANDOM_NUMBERS = {
    UPPER : 1,
    LOWER: 0
}

const BRIDGE = {
    UP : 'U',
    DOWN : 'D'
}

module.exports = {
    GAME_MESSAGES,
    INPUT_MESSAGES,
    ERROR_MESSAGES,
    RANDOM_NUMBERS,
    BRIDGE 
};