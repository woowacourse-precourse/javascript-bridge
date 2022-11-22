class Validator {
	static isNumber(value) {
		if (isNaN(value)) throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
	}
	static isInValidRange(number) {
		if (!(3 <= number && number <= 25))
			throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
	}
	static isValidMove(move) {
		if (!(move === 'U' || move === 'D'))
			throw new Error('[ERROR] 이동할 칸은 U/D 중 하나여야 합니다.');
	}
	static isValidCommand(command) {
		if (!(command === 'R' || command === 'Q'))
			throw new Error('[ERROR] 커맨드는 R/Q 중 하나여야 합니다.');
	}
}

module.exports = Validator;
