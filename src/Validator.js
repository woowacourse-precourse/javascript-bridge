const MissionUtils = require('@woowacourse/mission-utils');
const numRegex = /[^0-9]/;

const Validator = {
	isNum(size) {
		if (numRegex.test(size)) {
			throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
		}
	},
	
	isInRange(size) {
		if (size < 3 || size > 20) {
			throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
		}
	},

	checkBridgeSize(size) {
		this.isNum(size);
		this.isInRange(size);
	},

	checkMoving(move) {
		if (move !== 'U' || move !== 'D') {
			throw new Error('[ERROR] 이동은 \'위(U)\' 혹은 \'아래(D)\'로만 할 수 있습니다.');
		}
	},

	checkGameCommand(command) {
		if (command !== 'R' || command !== 'Q') {
			throw new Error('[ERROR] 재시작하려면 \'R\' 종료하려면 \'Q\'를 입력해야 합니다.');
		}
	}
}

module.exports = Validator;