const MESSAGE = Object.freeze({
    START_GAME : '다리 건너기 게임을 시작합니다.\n',
    ASK_BRIDGE_SIZE : '다리의 길이를 입력해주세요.\n',
    ASK_BRIDGE_MOVE : '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    ASK_GAME_RETRY : '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',

})

const ERROR = Object.freeze({
    BRIDGE_RANGE : '[ERROR] 3이상 20이하의 정수를 입력하세요.\n',
    MOVE_KEY : '[ERROR} 이동 키는 U나 D를 입력해주세요.\n',
    RETRY_KEY : '[ERROR] R이나 Q를 입력해주세요\n',

})

const CONSTANT = Object.freeze({
    ZERO_INDEX : 0 ,
    FIRST_GAME : 1 ,

})


module.exports = Object.freeze({
    MESSAGE,
    ERROR,
    CONSTANT,
});