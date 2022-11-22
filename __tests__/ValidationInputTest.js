const {
	checkBridgeSize,
	checkMoveInput,
	checkGameCommand,
} = require('../src/util/validationInput');

describe('입력값 검증 테스트', () => {
	test('다리의 길이는 3 이상 20 이하의 자연수여야 합니다.', () => {
		expect(() => {
			checkBridgeSize(2);
		}).toThrow('ERROR');
	});

	test('다리의 길이는 자연수여야 합니다.', () => {
		expect(() => {
			checkBridgeSize('3.3');
		}).toThrow('ERROR');
	});

	test('사용자가 이동 가능한 입력 값은 U 또는 D입니다.', () => {
		expect(() => {
			checkMoveInput('A');
		}).toThrow('ERROR');
	});

	test('게임 종료 명령어는 R 또는 Q입니다.', () => {
		expect(() => {
			checkGameCommand('A');
		}).toThrow('ERROR');
	});
});
