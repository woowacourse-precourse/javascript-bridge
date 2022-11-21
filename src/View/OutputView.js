const { Console } = require('@woowacourse/mission-utils');

const BRIDGE = {
	UP: 'U',
	DOWN: 'D',
	CORRECT: 'O',
	WRONG: 'X',
};

const GAME = {
	START_MESSAGE: '다리 건너기 게임을 시작합니다.',
	END_MESSAGE: '\n최종 게임 결과',
	SUCCESS_MESSAGE: '\n게임 성공 여부: ',
	TRY_COUNT_MESSAGE: '총 시도한 횟수: ',
};

const RESULT = {
	SUCCESS: '성공',
	FAIL: '실패',
};

const OutputView = {
	printStart() {
		Console.print(GAME.START_MESSAGE);
	},

	printMap(bridge, type, isMovable) {
		let result = '[ ';
		bridge.forEach((item, index) => {
			if (index === bridge.length - 1 && item === type)
				result += isMovable ? BRIDGE.CORRECT : BRIDGE.WRONG;
			else if (item === type) result += BRIDGE.CORRECT;
			else result += ' ';
			if (index !== bridge.length - 1) result += ' | ';
		});
		result += ' ]';
		Console.print(result);
	},

	printGameResultMessage() {
		Console.print(GAME.END_MESSAGE);
	},

	printResult(result) {
		Console.print(
			`${GAME.SUCCESS_MESSAGE}${
				result.isMovable ? RESULT.SUCCESS : RESULT.FAIL
			}`,
		);
		Console.print(`${GAME.TRY_COUNT_MESSAGE}${result.tryCount}`);
	},

	printError(message) {
		Console.print(message);
	},
};

module.exports = OutputView;
