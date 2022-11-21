const Messages = {
	GAME_START: '다리 건너기 게임을 시작합니다.',
	INSERT_LENGTH: '다리의 길이를 입력해주세요.',
	CHOOSE_MOVEMENT: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
	RESTART_OR_FINISH: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const ErrorMessages = {
	LENGTH: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
	MOVEMENT: `[ERROR] '대문자 U (위) 혹은 대문자 D (아래)'를 입력해야 합니다.`,
	RESTART_OR_FINISH: `[ERROR] '대문자 R (재시도) 혹은 대문자 Q (종료)'를 입력해야 합니다.`,
};

module.exports = {
	Messages,
	ErrorMessages,
};
