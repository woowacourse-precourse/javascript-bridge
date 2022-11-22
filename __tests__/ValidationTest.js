const Validation = require('../src/Validation');

describe("예외 테스트", () => {
    test("숫자가 아닌 입력", () => {
        expect(() => {
            const validation = new Validation();
            validation.checkSizeInputValidation('J');
        }).toThrow('[ERROR] 다리의 길이는 숫자여야 합니다.');
    });

    test("3~20 아닌 입력1", () => {
        expect(() => {
            const validation = new Validation();
            validation.checkSizeInputValidation(0);
        }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    });

    test("3~20 아닌 입력2", () => {
        expect(() => {
            const validation = new Validation();
            validation.checkSizeInputValidation(66);
        }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    });

    test("U, D 아닌 입력1", () => {
        expect(() => {
            const validation = new Validation();
            validation.checkMovingInputValidation('Z');
        }).toThrow('[ERROR] U 또는 D만 입력 가능합니다.');
    });

    test("U, D 아닌 입력2", () => {
        expect(() => {
            const validation = new Validation();
            validation.checkMovingInputValidation(1);
        }).toThrow('[ERROR] U 또는 D만 입력 가능합니다.');
    });

    test("R, Q 아닌 입력1", () => {
        expect(() => {
            const validation = new Validation();
            validation.checkRetryInputValidation('ㅎ');
        }).toThrow('[ERROR] R 또는 Q만 입력 가능합니다.');
    });

    test("R, Q 아닌 입력2", () => {
        expect(() => {
            const validation = new Validation();
            validation.checkRetryInputValidation(2);
        }).toThrow('[ERROR] R 또는 Q만 입력 가능합니다.');
    });
});