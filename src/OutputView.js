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

	printMap(currentBridge) {
		const upperArr = OutputView.getOneSideArr(
			currentBridge,
			OutputView.UPPER_BRIDGE,
		);
		const lowerArr = OutputView.getOneSideArr(
			currentBridge,
			OutputView.LOWER_BRIDGE,
		);
		const upperMap = OutputView.convertArrToMap(upperArr);
		const lowerMap = OutputView.convertArrToMap(lowerArr);

		MissionUtils.Console.print(upperMap + '\n' + lowerMap);
	},

	getOneSideArr(currentBridge, ONE_SIDE_BRIDGE) {
		return currentBridge.map((bridgeEle) => {
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

	/**
	 * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
	 * <p>
	 * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	printResult() {},
};

module.exports = OutputView;
