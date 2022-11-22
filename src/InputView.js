const { Console } = require('@woowacourse/mission-utils');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize(info) {
		Console.readLine('다리 길이를 입력해주세요.\n', line => {
			if (isNaN(line) || Number(line) < 3 || Number(line > 20)) throw new Error('[Error] 다리 길이 입력 값이 잘못 되었습니다.');
			info.bridgeLength = Number(line);
			info.bridgeInfo = makeBridge(info.bridgeLength, generate);
			this.readMoving(info);
		});
	},

	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(info) {
		Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래 : D)\n', input => {
			if (input !== 'D' && input !== 'U') throw new Error('[Error] 입력 값이 잘못 되었습니다.');
			if (input === 'U') info.inputList.push(1);
			else if (input === 'D') info.inputList.push(0);
			OutputView.printMap(info);
			if (info.bridgeGameManager.answerCheck(info, input)) {
				info.bridgeGameManager.move(info);
				this.readMoving(info);
			} else {
				this.readGameCommand(info);
			}
		});
	},
	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand(info) {
		Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', input => {
			if (input !== 'Q' && input !== 'R') throw new Error('[Error] 재시도 입력 값이 잘못 되었습니다.');
			if (input === 'Q') {
				OutputView.printMap(info);
				OutputView.printResult(info);
				Console.close();
			} else {
				info.gameCount += 1;
				info.inputList.pop();
				this.readMoving(info);
			}
		});
	},
};

module.exports = InputView;
