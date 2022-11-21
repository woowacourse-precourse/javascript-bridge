const { Console } = require('@woowacourse/mission-utils');

const INPUT = {
	BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
	MOVING: '\n이동할 칸을 입력해주세요. (위: U, 아래: D)\n',
	GAME_COMMAND:
		'\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const InputView = {
	readBridgeSize(callback) {
		Console.readLine(INPUT.BRIDGE_SIZE, input => {
			callback.bind(this)(input);
		});
	},

	readMoving(callback) {
		Console.readLine(INPUT.MOVING, input => {
			callback.bind(this)(input);
		});
	},

	readGameCommand(callback) {
		Console.readLine(INPUT.GAME_COMMAND, input => {
			callback.bind(this)(input);
		});
	},

	closeConsole() {
		Console.close();
	},
};

module.exports = InputView;
