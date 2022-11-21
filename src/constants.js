
const MESSAGE = Object.freeze({
	GAME_START: '다리 건너기 게임을 시작합니다.\n',

	INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
	INPUT_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
	INPUT_ENDING: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',

	RESULT: '최종 게임 결과\n',
	SUCCESS_OR_FAIL: '게임 성공 여부: ',
	TRY_COUNT: '총 시도한 횟수: ',
});

const STEP = Object.freeze({
	UP: 'U',
	DOWN: 'D',
});

module.exports = {
	MESSAGE,
	STEP,
};
