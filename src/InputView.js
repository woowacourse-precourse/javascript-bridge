const { Console, Random } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const OutputView = require('./OutputView');
const generateRandomNumber = require('./util/generateRandomNumber');

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

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
class InputView {
	bridgeSize = 0;
	bridge = [];
	userMoving = [];
	gameCommand = '';
	result = {
		isSuccess: false,
		tryCount: 0,
	};
	outputView;

	constructor() {
		this.outputView = new OutputView();
	}

	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize = () => {
		Console.readLine(INPUT.BRIDGE_SIZE, input => {
			this.bridgeSize = Number(input);
			this.validateInput(this.checkBridgeSize, this.readBridgeSize);
			this.bridge = BridgeMaker.makeBridge(
				this.bridgeSize,
				generateRandomNumber,
			);
			this.readMoving();
		});
	};

	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving = () => {
		Console.readLine(INPUT.MOVING, input => {
			this.userMoving.push(input);
			this.validateInput(this.checkMoving, this.readMoving);
			this.outputView.printMap(this.userMoving, this.bridge, BRIDGE.UP);
			this.outputView.printMap(this.userMoving, this.bridge, BRIDGE.DOWN);
			// bridge에 userMoving이 하나라도 다르면 isWrong
			this.result.isSuccess = this.userMoving.every(
				(bridge, index) => bridge === this.bridge[index],
			);
			if (!this.result.isSuccess) {
				this.result.tryCount += 1;
				this.readGameCommand();
			} else if (this.bridge.length === this.userMoving.length) {
				this.result.isSuccess = true;
				this.result.tryCount += 1;
				this.outputView.printResult(this.userMoving, this.bridge, this.result);
				Console.close();
			} else this.readMoving();
		});
	};

	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand = () => {
		Console.readLine(INPUT.GAME_COMMAND, input => {
			this.gameCommand = input;
			this.validateInput(this.checkGameCommand, this.readGameCommand);
			if (this.gameCommand === 'R') {
				this.userMoving = [];
				this.readMoving();
			} else if (this.gameCommand === 'Q') {
				this.outputView.printResult(this.userMoving, this.bridge, this.result);
				Console.close();
			}
		});
	};

	checkBridgeSize = () => {
		const reg = /^[3-9]|[1-9][0-9]|20$/;
		if (!reg.test(this.bridgeSize)) {
			throw ERROR.BRIDGE_SIZE;
		}
	};

	checkMoving = () => {
		const reg = /^[UD]$/;
		this.userMoving.some(element => {
			if (!reg.test(element)) {
				throw ERROR.MOVING;
			}
		});
	};

	checkGameCommand = () => {
		const reg = /^[RQ]$/;
		if (!reg.test(this.gameCommand)) {
			throw ERROR.GAME_COMMAND;
		}
	};

	validateInput = (checkFunction, retryFunction) => {
		try {
			checkFunction();
		} catch (e) {
			Console.print(e);
			retryFunction();
		}
	};
}

module.exports = InputView;
