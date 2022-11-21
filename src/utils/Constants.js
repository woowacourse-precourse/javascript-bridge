const MESSAGES = {
	gameStart: '다리 건너기 게임을 시작합니다.\n',
	bridgeSize: '다리의 길이를 입력해주세요.\n',
	chooseMoving: '이동할 칸을 선택해주세요. (위: U, 아래: D)',
	restartOrFinish: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const ERROR_MESSAGES = {
	bridgeSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
	chooseMoving: `[ERROR] '대문자 U (위) 혹은 대문자 D (아래)'를 입력해야 합니다.`,
	restartOrFinish: `[ERROR] '대문자 R (재시도) 혹은 대문자 Q (종료)'를 입력해야 합니다.`,
};

module.exports = {
	MESSAGES,
	ERROR_MESSAGES,
};
