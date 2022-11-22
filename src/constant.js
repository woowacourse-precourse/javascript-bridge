const ERROR_MESSAGE = Object.freeze({
    INCORRECT_NUMBER_MESSAGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    INCORRECT_MOVING_MESSAGE: '[ERROR] 움직이는 키는 U또는 D을 입력해야합니다.',
    INCORRECT_GAME_COMMAND_MESSAGE: '[ERROR] 게임종료는 Q, 재시작은 R을 눌러주세요.',
});
const KEY_VALUE = Object.freeze({
    UP_KEY: 'U',
    DOWN_KEY: 'D',
    RESTART_KEY: 'R',
    QUIT_KEY: 'Q',
});

module.exports = {
    ERROR_MESSAGE,
    KEY_VALUE,
}
