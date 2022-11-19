const Exception = require("../src/Exception");

describe('다리 길이 예외처리 테스트', () => {
    test('입력값이 문자열일 경우 예외처리', () => {
        const boolean = Exception.lengthException('string');
        expect(boolean).toBe(false);
    });

    test.each([['-2'], ['0'], ['1'], ['21']])("입력값이 3부터 20 사이의 숫자가 아닐 경우 예외처리", (input) => {
        const boolean = Exception.lengthException(input);
        expect(boolean).toBe(false);
    });

});