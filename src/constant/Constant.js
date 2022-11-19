const INPUT = {
	BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
	MOVING: '이동할 칸을 입력해주세요. (위: U, 아래: D)\n',
	GAME_COMMAND:
		'게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR = {
	BRIDGE_SIZE: '[ERROR] 다리의 길이는 3 이상 20 이하의 자연수여야 합니다.',
	MOVING: '[ERROR] U 또는 D를 입력해주세요.',
	GAME_COMMAND: '[ERROR] R 또는 Q를 입력해주세요.',
};

const BRIDGE = {
	UP: 'U',
	DOWN: 'D',
	CORRECT: 'O',
	WRONG: 'X',
	RANDOM_DOWN: 0,
	RANDOM_UP: 1,
};

const GAME = {
	START_MESSAGE: '다리 건너기 게임을 시작합니다.',
};

exports = {
	INPUT,
	ERROR,
	BRIDGE,
	GAME,
};
