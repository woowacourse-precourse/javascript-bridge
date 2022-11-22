class ErrorMessage {
	static ERROR_PREFIX = '[ERROR] ';
	static NOT_NUMBER = this.ERROR_PREFIX + '다리 길이는 숫자여야 합니다.';
	static NOT_IN_VALID_RANGE = this.ERROR_PREFIX + '다리 길이는 3부터 25 사이의 숫자여야 합니다.';
	static NOT_VALID_MOVE = this.ERROR_PREFIX + '이동할 칸은 U/D 중 하나여야 합니다.';
	static NOT_VALID_COMMAND = this.ERROR_PREFIX + '커맨드는 R/Q 중 하나여야 합니다.';
}

module.exports = ErrorMessage;
