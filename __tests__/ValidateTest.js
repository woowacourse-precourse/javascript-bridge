const Validator = require('../src/Validator');
const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
	test('다리 사이즈 유효성 테스트', () => {
		const testCase = ['a', 'b', '11 12', 0, 1, 2, 'a1', '1b', ' ', 21, 22, 23, 100];
		testCase.forEach((cases) => {
			expect(() => {
				Validator.checkBridgeSize(cases);
			}).toThrow('[ERROR]');
		});
	});

	test('짧은 옳은 다리 생성 확인 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

	test('긴 옳은 다리 생성 확인 테스트', () => {
    const randomNumbers = [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(12, mockGenerator);
    expect(bridge).toEqual(['D', 'D', 'D', 'U', 'U', 'U', 'U', 'U', 'U', 'D', 'D', 'D']);
  });
});