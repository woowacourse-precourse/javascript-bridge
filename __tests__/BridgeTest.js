const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
	MissionUtils.Console.readLine = jest.fn();
	answers.reduce((acc, input) => {
		return acc.mockImplementationOnce((_, callback) => {
			callback(input);
		});
	}, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

const getOutput = logSpy => {
	return [...logSpy.mock.calls].join('');
};

const runException = inputs => {
	mockQuestions(inputs);
	const logSpy = getLogSpy();
	const app = new App();

	app.play();
	expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
	logs.forEach(log => {
		expect(received).toEqual(expect.stringContaining(log));
	});
};

const expectBridgeOrder = (received, upside, downside) => {
	const upsideIndex = received.indexOf(upside);
	const downsideIndex = received.indexOf(downside);

	expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
	test('재시도한 경우 시도한 횟수 증가', () => {
		const logSpy = getLogSpy();

		mockRandoms([1, 0, 1, 1, 0, 1]);
		mockQuestions(['6', 'U', 'D', 'D', 'R', 'U', 'D', 'U', 'U', 'D', 'U']);

		const app = new App();
		app.play();

		const log = getOutput(logSpy);
		expectLogContains(log, [
			'최종 게임 결과',
			'[ O |   | O | O |   | O ]',
			'[   | O |   |   | O |   ]',
			'게임 성공 여부: 성공',
			'총 시도한 횟수: 2',
		]);
		expectBridgeOrder(log, '[ O |   | O | O |   | O ]', '[   | O |   |   | O |   ]');
	});

	test('재시도 or 종료 질문시 입력값이 R 또는 Q 제외한 문자 , 숫자인 경우 시도 횟수 증가 하지 않는다. ', () => {
		const logSpy = getLogSpy();

		mockRandoms([1, 1, 1]);
		mockQuestions(['3', 'U', 'D', 's', '2', 'R', 'U', 'U', 'U']);

		const app = new App();
		app.play();

		const log = getOutput(logSpy);
		expectLogContains(log, [
			'최종 게임 결과',
			'[ O | O | O ]',
			'[   |   |   ]',
			'게임 성공 여부: 성공',
			'총 시도한 횟수: 2',
		]);
		expectBridgeOrder(log, '[ O | O | O ]', '[   |   |   ]');
	});

	test('방향 입력시 U / D 제외한 문자를 입력해도 종료되지 않고 다시 입력해야 한다.', () => {
		const logSpy = getLogSpy();

		mockRandoms([1, 1, 1]);
		mockQuestions(['3', 'u', 'D', 's', '2', 'r', 's', 'u', 'U', 'd', 'r', 'u', '2', 'U', 'U']);

		const app = new App();
		app.play();

		const log = getOutput(logSpy);
		expectLogContains(log, [
			'최종 게임 결과',
			'[ O | O | O ]',
			'[   |   |   ]',
			'게임 성공 여부: 성공',
			'총 시도한 횟수: 3',
		]);
		expectBridgeOrder(log, '[ O | O | O ]', '[   |   |   ]');
	});

	test('방향 또는 명령어 입력시 소문자를 입력해도 정상 작동한다.', () => {
		const logSpy = getLogSpy();

		mockRandoms([1, 1, 1]);
		mockQuestions(['3', 'u', 'D', 's', '2', 'r', 'u', 'U', 'U']);

		const app = new App();
		app.play();

		const log = getOutput(logSpy);
		expectLogContains(log, [
			'최종 게임 결과',
			'[ O | O | O ]',
			'[   |   |   ]',
			'게임 성공 여부: 성공',
			'총 시도한 횟수: 2',
		]);
		expectBridgeOrder(log, '[ O | O | O ]', '[   |   |   ]');
	});

	test('재시도한 후 바로 실패하고 종료할 경우 잘못 건넌 한칸만 찍히고 실패 출력한다.', () => {
		const logSpy = getLogSpy();

		mockRandoms([1, 1, 1]);
		mockQuestions(['3', 'u', 'D', 's', '2', 'r', 'd', 'q']);

		const app = new App();
		app.play();

		const log = getOutput(logSpy);
		expectLogContains(log, ['최종 게임 결과', '[   ]', '[ X ]', '게임 성공 여부: 실패', '총 시도한 횟수: 2']);
		expectBridgeOrder(log, '[   ]', '[ X ]');
	});
	test('최종 종합 테스트', () => {
		const logSpy = getLogSpy();

		mockRandoms([0, 1, 1, 0, 1, 1, 0, 0, 0]);
		mockQuestions([
			'9',
			'a',
			's',
			'2',
			'0',
			' ',
			'U',
			's',
			'4',
			' ',
			'R',
			'u',
			's',
			'r',
			'D',
			'd',
			'2',
			'r',
			'd',
			'U',
			'd',
			'R',
			'd',
			'U',
			'U',
			'U',
			'r',
			'd',
			'u',
			'u',
			'd',
			'd',
			'2',
			'r',
			'd',
			'u',
			'U',
			'D',
			'U',
			'D',
			'g',
			'r',
			'd',
			'u',
			'U',
			'du=',
			'd',
			'u',
			'u',
			'd',
			'd',
			'R',
			'u',
			'2',
			'r',
			'd',
			'u',
			'u',
			'D',
			'U',
			'D',
			'R',
			'd',
			'u',
			'u',
			'd',
			'u',
			'u',
			'd',
			'd',
			'd',
		]);

		const app = new App();
		app.play();

		const log = getOutput(logSpy);
		expectLogContains(log, [
			'최종 게임 결과',
			'[   | O | O |   | O | O |   |   |   ]',
			'[ O |   |   | O |   |   | O | O | O ]',
			'게임 성공 여부: 성공',
			'총 시도한 횟수: 10',
		]);
		expectBridgeOrder(log, '[   | O | O |   | O | O |   |   |   ]', '[ O |   |   | O |   |   | O | O | O ]');
	});

	test('20 초과 숫자 입력시 에러 출력', () => {
		runException(['25']);
	});

	test('3 미만 숫자 입력시 에러 출력', () => {
		runException(['2']);
	});
});
