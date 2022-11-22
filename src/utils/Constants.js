const MESSAGES = Object.freeze({
	gameStart: '다리 건너기 게임을 시작합니다.\n',
	bridgeSize: '다리의 길이를 입력해주세요.\n',
	chooseMoving: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
	retryOrQuit: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
	finalResultMessage: '최종 게임 결과',
	winOrFail: '게임 성공 여부: ',
	tryCount: '총 시도한 횟수: ',
	blank: '',
});

const ERROR_MESSAGES = Object.freeze({
	notNumber: '[ERROR] 길이는 숫자를 입력해야 합니다.',
	bridgeSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
	chooseMoving: `[ERROR] '대문자 U (위) 혹은 대문자 D (아래)'를 입력해야 합니다.`,
	retryOrQuit: `[ERROR] '대문자 R (재시도) 혹은 대문자 Q (종료)'를 입력해야 합니다.`,
});

const BRIDGE = Object.freeze({
	upper: 1,
	lower: 0,
});

const MOVING = Object.freeze({
	up: 'U',
	down: 'D',
});

const SELECT = Object.freeze({
	retry: 'R',
	quit: 'Q',
});

const BRIDGE_SIZE = Object.freeze({
	minimum: 3,
	maximum: 20,
});

const REGEXP = Object.freeze({
	number: /^-?\d+$/g,
});

const BRIDGE_VIEW = Object.freeze({
	start: '[ ',
	end: ' ]',
	section: ' | ',
	matched: 'O',
	notMatched: 'X',
	blank: ' ',
});

const RESULT = Object.freeze({
	win: '성공',
	fail: '실패',
});

module.exports = {
	MESSAGES,
	ERROR_MESSAGES,
	BRIDGE,
	MOVING,
	SELECT,
	BRIDGE_SIZE,
	REGEXP,
	BRIDGE_VIEW,
	RESULT,
};
