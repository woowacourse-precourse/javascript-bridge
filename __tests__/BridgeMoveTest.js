const BridgeMove = require('../src/BridgeMove');

describe('input 유효성 테스트', () => {
	test('현재 건넌 다리가 정답인 경우 새로운 다리배열 출력', () => {
		const bridge = ['UO', 'UO', 'D', 'D', 'U'];
		const currentPos = 2;
		const moving = 'D';
		expect(BridgeMove.moveFrontCorrect(bridge, currentPos, moving)).toEqual([
			'UO',
			'UO',
			'DO',
			'D',
			'U',
		]);
	});

	test('현재 건넌 다리가 오답인 경우 새로운 다리배열 출력', () => {
		const bridge = ['UO', 'UO', 'D', 'D', 'U'];
		const currentPos = 2;
		const moving = 'U';
		expect(BridgeMove.moveFrontWrong(bridge, currentPos, moving)).toEqual([
			'UO',
			'UO',
			'UX',
			'D',
			'U',
		]);
	});

	test('재시작시 뒤로 돌아가서 원래 다리 배열을 출력', () => {
		const bridge = ['UO', 'UO', 'UX', 'D', 'U'];
		const currentPos = 2;
		expect(BridgeMove.moveBack(bridge, currentPos)).toEqual([
			'UO',
			'UO',
			'D',
			'D',
			'U',
		]);
	});
});
