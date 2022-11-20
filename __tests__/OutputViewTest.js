const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('../src/OutputView');

describe('BridgeGame Class 테스트', () => {
	test('현재입력까지 지나온 bridge배열을 map형태로 바꾸어 출력', () => {
		const logSpy = jest.spyOn(MissionUtils.Console, 'print');
		const log = '[ O |   |   ]\n[   | O | O ]';

		const currentBridge = ['UO', 'DO', 'DO'];
		OutputView.printMap(currentBridge);

		expect(logSpy).toHaveBeenCalledWith(log);
	});

	test('현재입력까지 지나온 bridge배열을 upper or lower 배열로 출력', () => {
		expect(
			OutputView.getOneSideArr(
				['UO', 'DO', 'UO', 'UX'],
				OutputView.UPPER_BRIDGE,
			),
		).toEqual([' O ', '   ', ' O ', ' X ']);
	});

	test('lower or upper 배열을 실제 출력에 맞게 변환', () => {
		expect(OutputView.convertArrToMap([' O ', '   ', ' O ', ' X '])).toEqual(
			'[ O |   | O | X ]',
		);
	});
});
