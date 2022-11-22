const { checkSizeValidation, checkMovingValidation, checkCommandValidation } = require('../src/utils/Validation');

describe('예외 처리 테스트', () => {
	test('다리 길이는 숫자를 입력하지 않으면 예외가 발생한다.(test1)', () => {
		expect(() => {
			checkSizeValidation('NotNumber');
		}).toThrow('[ERROR] 길이는 숫자를 입력해야 합니다.');
	});

	test('다리 길이는 숫자를 입력하지 않으면 예외가 발생한다.(test2)', () => {
		expect(() => {
			checkSizeValidation('1224asgddfas');
		}).toThrow('[ERROR] 길이는 숫자를 입력해야 합니다.');
	});

	test('다리길이는 3부터 20사이의 숫자를 입력하지 않으면 예외가 발생한다.(test1)', () => {
		expect(() => {
			checkSizeValidation('2');
		}).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
	});

	test('다리길이는 3부터 20사이의 숫자를 입력하지 않으면 예외가 발생한다.(test2)', () => {
		expect(() => {
			checkSizeValidation('30');
		}).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
	});

	test('칸 이동시 대문자 U 혹은 대문자 D를 입력하지 않으면 예외가 발생한다.(test1)', () => {
		expect(() => {
			checkMovingValidation('u');
		}).toThrow(`[ERROR] '대문자 U (위) 혹은 대문자 D (아래)'를 입력해야 합니다.`);
	});

	test('칸 이동시 대문자 U 혹은 대문자 D를 입력하지 않으면 예외가 발생한다.(test2)', () => {
		expect(() => {
			checkMovingValidation('d');
		}).toThrow(`[ERROR] '대문자 U (위) 혹은 대문자 D (아래)'를 입력해야 합니다.`);
	});

	test('게임 재시도 결정시 대문자 R 혹은 대문자 Q를 입력하지 않으면 예외가 발생한다.(test1)', () => {
		expect(() => {
			checkCommandValidation('r');
		}).toThrow(`[ERROR] '대문자 R (재시도) 혹은 대문자 Q (종료)'를 입력해야 합니다.`);
	});

	test('게임 재시도 결정시 대문자 R 혹은 대문자 Q를 입력하지 않으면 예외가 발생한다.(test2)', () => {
		expect(() => {
			checkCommandValidation('q');
		}).toThrow(`[ERROR] '대문자 R (재시도) 혹은 대문자 Q (종료)'를 입력해야 합니다.`);
	});
});
