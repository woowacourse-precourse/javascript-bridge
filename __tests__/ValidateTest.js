const Validator = require('../src/Validator');

describe('다리 생성 테스트', () => {
	test('다리 사이즈 유효성 테스트', () => {
		const testCase = ['a', 'b', '11 12', 0, 1, 2, 'a1', '1b', ' ', 21, 22, 23, 100];
		testCase.forEach((cases) => {
			expect(() => {
				Validator.checkBridgeSize(cases);
			}).toThrow('[ERROR]');
		});
	})
});