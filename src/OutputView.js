const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
	CORRECT_BRIDGE_ELE: ' O ',
	WRONG_BRIDGE_ELE: ' x ',
	EMPTY_BRIDGE_ELE: '   ',

	UPPER_BRIDGE: {
		CORRECT: 'UO',
		WRONG: 'UX',
	},
	LOWER_BRIDGE: {
		CORRECT: 'DO',
		WRONG: 'DX',
	},
	RESULT_MSG: '최종 게임 결과',
	SUCESS_OR_FAIL_MSG: '게임 성공 여부: ',
	RETRY_COUNT_MSG: '총 시도한 횟수 : ',

	printMap(prevCrossedBridge) {
		const upperMap = OutputView.getOneSideMap(
			prevCrossedBridge,
			OutputView.UPPER_BRIDGE,
		);
		const lowerMap = OutputView.getOneSideMap(
			prevCrossedBridge,
			OutputView.LOWER_BRIDGE,
		);

		MissionUtils.Console.print(`${upperMap}\n${lowerMap}`);
	},

	getOneSideMap(prevCrossedBridge, ONE_SIDE_BRIDGE) {
		const oneSideArr = OutputView.getOneSideArr(
			prevCrossedBridge,
			ONE_SIDE_BRIDGE,
		);
		const oneSideMap = OutputView.convertArrToMap(oneSideArr);
		return oneSideMap;
	},

	getOneSideArr(prevCrossedBridge, ONE_SIDE_BRIDGE) {
		return prevCrossedBridge.map((bridgeEle) => {
			if (bridgeEle === ONE_SIDE_BRIDGE.CORRECT) {
				return OutputView.CORRECT_BRIDGE_ELE;
			}
			if (bridgeEle === ONE_SIDE_BRIDGE.WRONG) {
				return OutputView.WRONG_BRIDGE_ELE;
			}
			return OutputView.EMPTY_BRIDGE_ELE;
		});
	},

	// 정해진 출력형태로 바꾸어주는 함수
	convertArrToMap(arr) {
		const map = JSON.stringify(arr);

		const quotationRegExp = new RegExp('"', 'g');
		const commaRegExp = new RegExp(',', 'g');
		return map.replace(quotationRegExp, '').replace(commaRegExp, '|');
	},

	printResult(bridgeGame, prevCrossedBridge, RETRY_COUNT) {
		MissionUtils.Console.print(OutputView.RESULT_MSG);
		OutputView.printMap(prevCrossedBridge);
		const successOrFail = bridgeGame.wasCorrect() ? '성공' : '실패';

		MissionUtils.Console.print(OutputView.SUCESS_OR_FAIL_MSG + successOrFail);
		MissionUtils.Console.print(OutputView.RETRY_COUNT_MSG + RETRY_COUNT);
	},
};

module.exports = OutputView;
