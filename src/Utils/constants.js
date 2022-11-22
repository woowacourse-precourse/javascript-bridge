
const MESSAGE = Object.freeze({
	GAME_START: '다리 건너기 게임을 시작합니다.',

	INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
	INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
	INPUT_ENDING: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',

	RESULT: '최종 게임 결과',
	SUCCESS_OR_FAIL: '게임 성공 여부:',
	TRY_COUNT: '총 시도한 횟수:',
});

const ERROR_MSG = Object.freeze({
	BRIDGE_SIZE_NUM: '[ERROR] 다리 길이는 숫자여야 합니다.',
	BRIDGE_SIZE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',

	MOVING: '[ERROR] 이동은 \'위(U)\' 혹은 \'아래(D)\'로만 할 수 있습니다.',
	ENDING: '[ERROR] 재시작하려면 \'R\' 종료하려면 \'Q\'를 입력해야 합니다.',
})

const STEP = Object.freeze({
	UP: 'U',
	DOWN: 'D',
});

const RESULT = Object.freeze({
	GOOD: 'good',
	BAD: 'bad',
	FINISH: 'finish',

	SUCCESS: '성공',
	FAIL: '실패',
});

module.exports = {
	MESSAGE,
	ERROR_MSG,
	STEP,
	RESULT,
};
